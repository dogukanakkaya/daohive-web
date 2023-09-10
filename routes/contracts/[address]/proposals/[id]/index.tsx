import { ethers } from "ethers";
import { RouteContext } from "$fresh/server.ts";
import Time from "@/components/Proposals/Time.tsx";
import { render } from "$gfm";
import Button from "@/components/Button.tsx";
import { provider } from "@/utils/blockchain.ts";

const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string",
      },
      {
        "internalType": "address[]",
        "name": "_whitelist",
        "type": "address[]",
      },
    ],
    "stateMutability": "nonpayable",
    "type": "constructor",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address",
      },
    ],
    "name": "OwnershipTransferred",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "string",
        "name": "proposalId",
        "type": "string",
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "uri",
        "type": "string",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "startAt",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "endAt",
        "type": "uint256",
      },
    ],
    "name": "ProposalAdded",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "voter",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "string",
        "name": "proposalId",
        "type": "string",
      },
      {
        "indexed": false,
        "internalType": "enum VotingBase.VoteType",
        "name": "voteType",
        "type": "uint8",
      },
    ],
    "name": "VoteCasted",
    "type": "event",
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_proposalId",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "_uri",
        "type": "string",
      },
      {
        "internalType": "uint256",
        "name": "_startAt",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "_endAt",
        "type": "uint256",
      },
    ],
    "name": "addProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_addresses",
        "type": "address[]",
      },
    ],
    "name": "addToWhitelist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "description",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "getWhitelist",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "getWhitelistCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "name": "hasVotedForProposal",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "name": "proposals",
    "outputs": [
      {
        "internalType": "string",
        "name": "id",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "uri",
        "type": "string",
      },
      {
        "internalType": "uint256",
        "name": "approvalCount",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "disapprovalCount",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "neutralCount",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "startAt",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "endAt",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_addresses",
        "type": "address[]",
      },
    ],
    "name": "removeFromWhitelist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_voters",
        "type": "address[]",
      },
      {
        "internalType": "uint256[]",
        "name": "_weights",
        "type": "uint256[]",
      },
    ],
    "name": "setWeights",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address",
      },
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_proposalId",
        "type": "string",
      },
      {
        "internalType": "enum VotingBase.VoteType",
        "name": "_voteType",
        "type": "uint8",
      },
    ],
    "name": "vote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "name": "weights",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "name": "whitelist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "whitelistAddresses",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
];

interface Proposal {
  id: string;
  uri: string;
  approvalCount: number;
  disapprovalCount: number;
  neutralCount: number;
  startAt: number;
  endAt: number;
}

interface Metadata {
  name: string;
  description: string;
  content: string;
  image: string;
}

export default async function Proposal(_req: Request, ctx: RouteContext) {
  const deployedContract = new ethers.Contract(ctx.params.address, abi, provider);

  const proposal = (await deployedContract.proposals(ctx.params.id)).toObject();
  // const metadata: Metadata = await (await fetch(proposal.uri)).json()
  const metadata: Metadata = {
    name: "Test proposal name",
    description: "Test proposal description is here",
    content: await (await fetch("https://raw.githubusercontent.com/dogukanakkaya/permahistory/main/README.md")).text(),
    image: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  };

  return (
    <main class="px-6 space-y-4">
      <div class="text-center">
        <h1 class="text-3xl md:text-5xl font-bold mb-2">{metadata.name}</h1>
        <p class="text-lg text-gray-500">{metadata.description}</p>
      </div>
      <div>
        <img class="w-full max-h-[800px] object-cover rounded-xl" src={metadata.image} alt={metadata.name} />
      </div>
      <VoteContextSection proposal={proposal} />
      <div className="flex items-center justify-center">
        <div
          data-color-mode="auto"
          data-light-theme="light"
          data-dark-theme="dark"
          className="markdown-body bg-transparent! w-full md:w-2/3 my-10 no-anchor"
          dangerouslySetInnerHTML={{ __html: render(metadata.content) }}
        />
      </div>
      <VoteContextSection proposal={proposal} />
    </main>
  );
}

function VoteContextSection({ proposal }: { proposal: Proposal }) {
  return (
    <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
      <ul class="flex gap-6">
        <li>
          <i className="bi bi-emoji-smile text-green-100"></i> <span className="font-bold">{proposal.approvalCount}</span> approved
        </li>
        <li>
          <i className="bi bi-emoji-frown text-red-100"></i> <span className="font-bold">{proposal.disapprovalCount}</span> disapproved
        </li>
        <li>
          <i className="bi bi-emoji-neutral"></i> {proposal.neutralCount} neutral
        </li>
      </ul>
      <ul class="flex items-center gap-6">
        <li>
          <Time class="bg-transparent!" startAt={Number(proposal.startAt) * 1000} endAt={Number(proposal.endAt) * 1000} />
        </li>
        <li>
          <Button>
            Vote <i class="bi bi-person-up"></i>
          </Button>
        </li>
      </ul>
    </div>
  );
}

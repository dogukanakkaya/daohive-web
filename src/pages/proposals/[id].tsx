import Time from '@/components/Proposals/Time.tsx'
import { marked } from 'marked'
import { markedEmoji } from 'marked-emoji'
import { useEffect, useState } from 'react'
import Vote, { VoteType } from '@/components/Proposals/Vote'
import { getArtifact } from '@/utils/supabase'
import { ethers } from 'ethers'
import { useSearchParams, useParams, useNavigate } from 'react-router-dom'
import { POLYGON_MUMBAI_RPC_URL } from '@/config'
import emojis from '@/assets/emojis.json'

marked.use(markedEmoji({ emojis, unicode: true }))

interface Proposal {
  id: string;
  uri: string;
  approvalCount: bigint;
  disapprovalCount: bigint;
  neutralCount: bigint;
  startAt: bigint;
  endAt: bigint;
}

interface Metadata {
  name: string;
  description: string;
  content: string;
  image: string;
}

export default function Proposal() {
  const { address, id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [proposal, setProposal] = useState<Proposal>()
  const [metadata, setMetadata] = useState<Metadata>()
  const [abi, setAbi] = useState<ethers.InterfaceAbi>()

  useEffect(() => {
    const type = searchParams.get('type')
    if (!type || !address || !id) return navigate('/proposals')

    !async function () {
      const { abi } = await getArtifact(type)
      const contract = new ethers.Contract(address, abi, new ethers.JsonRpcProvider(POLYGON_MUMBAI_RPC_URL))
      const proposal = (await contract.proposals(id)).toObject()
      const metadata: Metadata = await (await fetch(proposal.uri)).json()
      setAbi(abi)
      setProposal(proposal)
      setMetadata(metadata)
    }()
  }, [address, id, navigate, searchParams])

  const handleVoteSuccess = (type: VoteType, weight: bigint) => {
    if (!proposal) return
    const key = type === VoteType.Approval ? 'approvalCount' : type === VoteType.Disapproval ? 'disapprovalCount' : 'neutralCount'
    setProposal({ ...proposal, [key]: proposal[key] + weight })
  }

  if (!proposal || !metadata || !abi) return <Placeholder />

  return (
    <main className="px-6 space-y-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{metadata.name}</h1>
        <p className="text-lg text-gray-500">{metadata.description}</p>
      </div>
      <div>
        <img className="w-full max-h-[800px] object-contain rounded-xl" src={metadata.image} alt={metadata.name} />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <ul className="flex gap-4">
          <li>
            <i className="bi bi-emoji-smile text-green-500 dark:text-green-100"></i> <span className="font-bold">{Number(proposal.approvalCount)}</span> approved
          </li>
          <li>
            <i className="bi bi-emoji-frown text-red-500 dark:text-red-100"></i> <span className="font-bold">{Number(proposal.disapprovalCount)}</span> disapproved
          </li>
          <li>
            <i className="bi bi-emoji-neutral"></i> {Number(proposal.neutralCount)} neutral
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <Time className="bg-transparent! px-2 py-1" startAt={Number(proposal.startAt) * 1000} endAt={Number(proposal.endAt) * 1000} />
          </li>
          <li>
            <Vote id={proposal.id} abi={abi} address={address as string} handleSuccess={handleVoteSuccess} />
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <div dangerouslySetInnerHTML={{ __html: marked.parse(metadata.content) }} className="w-full md:w-2/3 max-w-none my-10 prose prose-headings:border-b dark:prose-headings:border-gray-800 prose-headings:pb-3 dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500" />
      </div>
    </main>
  )
}

function Placeholder() {
  return (
    <div className="px-6 space-y-4 animate-pulse">
      <div className="flex flex-col items-center gap-2">
        <div className="w-1/3 h-12 bg-slate-500 dark:bg-slate-700 rounded"></div>
        <div className="w-2/3 h-7 bg-slate-500 dark:bg-slate-700 rounded"></div>
      </div>
      <div className="bg-slate-500 dark:bg-slate-700 w-full h-[800px] rounded-xl"></div>
      <div className="flex justify-between items-center flex-col lg:flex-row gap-4 mb-2">
        <div className="flex gap-4">
          <div className="w-28 h-8 bg-slate-500 dark:bg-slate-700 rounded"></div>
          <div className="w-28 h-8 bg-slate-500 dark:bg-slate-700 rounded"></div>
          <div className="w-28 h-8 bg-slate-500 dark:bg-slate-700 rounded"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-20 h-8 bg-slate-500 dark:bg-slate-700 rounded"></div>
          <div className="w-28 h-8 bg-slate-500 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
      <div className="flex-center">
        <div className="w-full md:w-2/3 my-10">
          <div className="w-1/3 h-5 bg-slate-500 dark:bg-slate-700 rounded mb-2"></div>
          <div className="h-3 bg-slate-500 dark:bg-slate-700 rounded mb-2"></div>
          <div className="h-3 bg-slate-500 dark:bg-slate-700 rounded mb-2"></div>
          <div className="w-2/3 h-5 bg-slate-500 dark:bg-slate-700 rounded mb-2"></div>
          <div className="w-10/12 h-3 bg-slate-500 dark:bg-slate-700 rounded mb-2"></div>
          <div className="w-2/3 h-5 bg-slate-500 dark:bg-slate-700 rounded mb-2"></div>
          <div className="w-40 h-3 bg-slate-500 dark:bg-slate-700 rounded mb-2"></div>
          <div className="h-3 bg-slate-500 dark:bg-slate-700 rounded mb-2"></div>
          <div className="w-3/4 h-3 bg-slate-500 dark:bg-slate-700 rounded mb-2"></div>
          <div className="h-3 bg-slate-500 dark:bg-slate-700 rounded mb-2"></div>
          <div className="w-60 h-3 bg-slate-500 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  )
}
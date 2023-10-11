import Button from '@/components/Button.tsx'
import { useMetamask } from '@/hooks/useMetamask.tsx'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { txUrl } from '@/utils/blockchain'

export enum VoteType {
  Approval,
  Disapproval,
  Neutral,
}

interface Props {
  id: string;
  address: string;
  abi: ethers.InterfaceAbi;
  handleSuccess: (type: VoteType) => void;
}

export default function Vote({ id, address, abi, handleSuccess }: Props) {
  const [hasVoted, setHasVoted] = useState(false)
  const [voting, setVoting] = useState(false)
  const [voteType, setVoteType] = useState<VoteType>()
  const [loading, setLoading] = useState(false)
  const [receipt, setReceipt] = useState<ethers.TransactionReceipt>()
  const { isMetamaskConnected, connectToMetamask, getContract } = useMetamask()

  useEffect(() => {
    if (!isMetamaskConnected) return

    !async function () {
      const contract = await getContract(address, abi)
      const _hasVoted = await contract.hasVotedForProposal(window.ethereum.selectedAddress, id)
      setHasVoted(_hasVoted)
    }()
  }, [isMetamaskConnected, abi, address, id, getContract])

  const handleVote = async (type: VoteType) => {
    if (!isMetamaskConnected) {
      return connectToMetamask()
    }

    const contract = await getContract(address, abi)
    setVoteType(type)
    setLoading(true)
    try {
      const tx = await contract.vote(id, type)
      const r = await tx.wait()
      setReceipt(r)
      handleSuccess(type)
    } catch (error: any) {
      alert(error.reason ?? error.message)
    }
    setLoading(false)
  }

  if (hasVoted) {
    return <span className="text-gradient-primary">You have already voted for this proposal.</span>
  }

  if (receipt) {
    return <span className="text-gradient-primary">Thank you for voting! Transaction hash:{' '}
      <a href={txUrl(receipt.hash)} target="_blank">{receipt.hash.slice(0, 6)}...{receipt.hash?.slice(receipt.hash.length - 4)}</a>
    </span>
  }

  return (
    <>
      {voting
        ? (
          <div className="flex gap-2 text-sm max-h-[40px] whitespace-nowrap">
            <Button onClick={() => handleVote(0)} disabled={loading} className="px-3 flex-center gap-1.5">
              <span className="hidden sm:block">Approve</span> {voteType === 0 && loading ? <div className="inline-block loading w-4 h-4 border-2 border-t-indigo-300" /> : <i className="bi bi-emoji-smile text-green-100" />}
            </Button>
            <Button onClick={() => handleVote(1)} disabled={loading} className="px-3 flex-center gap-1.5">
              <span className="hidden sm:block">Disapprove</span> {voteType === 1 && loading ? <div className="inline-block loading w-4 h-4 border-2 border-t-indigo-300" /> : <i className="bi bi-emoji-frown text-red-100" />}
            </Button>
            <Button onClick={() => handleVote(2)} disabled={loading} className="px-3 flex-center gap-1.5">
              <span className="hidden sm:block">Neutral</span> {voteType === 2 && loading ? <div className="inline-block loading w-4 h-4 border-2 border-t-indigo-300" /> : <i className="bi bi-emoji-neutral" />}
            </Button>
          </div>
        )
        : (
          <Button onClick={() => setVoting(true)}>
            Vote <i className="bi bi-person-up"></i>
          </Button>
        )}
    </>
  )
}

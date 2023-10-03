import Button from '@/components/Button.tsx'
import { useMetamask } from '@/hooks/useMetamask.tsx'
import { useEffect, useMemo, useState } from 'react'
import { ethers } from 'ethers'

enum VoteType {
  Approval,
  Disapproval,
  Neutral,
}

interface Props {
  id: string;
  address: string;
  abi: ethers.InterfaceAbi;
}

export default function Vote({ id, address, abi }: Props) {
  const [hasVoted, setHasVoted] = useState(false)
  const [voting, setVoting] = useState(false)
  const [votingFor, setVotingFor] = useState<VoteType | null>(null)
  const [loading, setLoading] = useState(false)
  const [receipt, setReceipt] = useState<ethers.TransactionReceipt | null>(null)
  const { isMetamaskConnected, connectToMetamask, getContract } = useMetamask()

  useEffect(() => {
    if (!isMetamaskConnected) return

    !async function () {
      const contract = await getContract(address, abi)
      const _hasVoted = await contract.hasVotedForProposal(address, id)
      setHasVoted(_hasVoted)
    }()
  }, [isMetamaskConnected, abi, address, id, getContract])

  const handleVote = async (type: VoteType) => {
    if (!isMetamaskConnected) {
      return connectToMetamask()
    }

    const contract = await getContract(address, abi)
    setVotingFor(type)
    setLoading(true)
    try {
      const tx = await contract.vote(id, type)
      const r = await tx.wait()
      setReceipt(r)
    } catch (error: any) {
      alert(error.reason)
    }
    setLoading(false)
  }

  if (hasVoted) {
    return <span>You have already voted for this proposal.</span>
  }

  if (receipt) {
    return <span>Thank you for voting! Transaction hash: {receipt.hash}</span>
  }

  return (
    <>
      {voting
        ? (
          <div className="flex gap-2 text-sm max-h-[40px] whitespace-nowrap">
            <Button onClick={() => handleVote(0)} disabled={loading} className="px-2 py-1">
              Approve {votingFor === 0 && loading ? <i className="bi bi-arrow-clockwise inline-block animate-spin"></i> : <i className="bi bi-emoji-smile text-green-100"></i>}
            </Button>
            <Button onClick={() => handleVote(1)} disabled={loading}>
              Disapprove {votingFor === 1 && loading ? <i className="bi bi-arrow-clockwise inline-block animate-spin"></i> : <i className="bi bi-emoji-frown text-red-100"></i>}
            </Button>
            <Button onClick={() => handleVote(2)} disabled={loading}>
              Neutral {votingFor === 2 && loading ? <i className="bi bi-arrow-clockwise inline-block animate-spin"></i> : <i className="bi bi-emoji-neutral"></i>}
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

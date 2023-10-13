import Time from '@/components/Proposals/Time.tsx'
import { Proposal } from '@/pages/proposals'

export default function Card({ proposal }: { proposal: Proposal }) {
  return (
    <div className="bg-gray-50 dark:bg-proposal p-6 rounded-xl shadow space-y-4 transition-transform hover:scale-[1.025]">
      <div>
        <img src={proposal.metadata.image} className="rounded-xl" alt={proposal.metadata.name} />
      </div>
      <div>
        <h1>
          <a href={`/${proposal.address}/${proposal.id}?type=${proposal.type}`} className="text-2xl dark:text-white font-semibold">{proposal.metadata.name}</a>
        </h1>
        <p className="mt-2 dark:text-[#8bacda]">{proposal.metadata.description.length > 100 ? `${proposal.metadata.description.slice(0, 100)}...` : proposal.metadata.description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 w-full">
          <span className="flex items-center justify-center w-1/2 h-16 bg-gray-200 dark:bg-gray-900 hover:bg-opacity-50 rounded-xl cursor-pointer">
            {proposal.type === 'VotingPrivate' ? 'Private' : 'Public'} <i className="bi bi-shield-check ml-2"></i>
          </span>
          <Time className="w-1/2 h-16 cursor-pointer" startAt={proposal.startAt * 1000} endAt={proposal.endAt * 1000} />
        </div>
        <a href={`/${proposal.address}/${proposal.id}?type=${proposal.type}`} className="flex items-center justify-center h-16 text-gray-300 bg-primary rounded-xl cursor-pointer">
          Read more <i className="bi bi-box-arrow-in-up-right ml-1"></i>
        </a>
      </div>
    </div>
  )
}

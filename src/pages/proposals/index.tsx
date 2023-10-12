import { useEffect, useState } from 'react'
import Card from '@/components/Proposals/Card.tsx'
import { API_URL } from '@/config'

export interface Proposal {
  id: string;
  uri: string;
  metadata: {
    name: string;
    description: string;
    content: string;
    image: string;
  };
  address: string;
  startAt: number;
  endAt: number;
  createdAt: string;
  type: 'VotingPrivate' | 'VotingPublic';
}

export default function Proposals() {
  const [loading, setLoading] = useState(false)
  const [initialProposals, setInitialProposals] = useState<Proposal[]>([])
  const [proposals, setProposals] = useState<Proposal[]>([])
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({
    startAt: '',
    endAt: ''
  })

  const fetchProposals = async ({ term, filters: _filters }: { term: string, filters?: typeof filters }) => {
    const queryString = new URLSearchParams({ term, ..._filters }).toString()
    const response = await fetch(`${API_URL}/proposals/search?${queryString}`)
    const data = await response.json()
    return data.proposals
  }

  useEffect(() => {
    !async function () {
      setLoading(true)
      const initialProposals = await fetchProposals({ term: '' })
      setInitialProposals(initialProposals)
      setProposals(initialProposals)
      setLoading(false)
    }()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const term = search.trim()
    if (filters.startAt === '' && filters.endAt === '') {
      if (term === '') return setProposals(initialProposals)
      if (term.length < 3) return
    }

    const timeout = setTimeout(async () => {
      setLoading(true)
      const proposals = await fetchProposals({ term, filters })
      setProposals(proposals)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filters])

  return (
    <main>
      <div className="flex flex-col md:flex-row gap-8 md:gap-4 px-6 mb-8">
        <div className="relative flex-grow">
          <span className="absolute top-1/2 -translate-y-1/2 left-4">
            <i className="bi bi-search"></i>
          </span>
          <input
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            name="search"
            className="pl-10 pr-4 py-3 w-full min-h-[3rem] dark:bg-gray-800 rounded-lg appearance-none focus:outline-none dark:hover:bg-proposal"
            type="search"
            placeholder="Search proposals, contracts"
          />
        </div>
        <div className="relative">
          <label className="absolute -top-6">Starts at</label>
          <span className="absolute top-1/2 -translate-y-1/2 left-4">
            <i className="bi bi-calendar-date"></i>
          </span>
          <input
            value={filters.startAt}
            onInput={(e) => setFilters({ ...filters, startAt: (e.target as HTMLInputElement).value })}
            className="pl-10 pr-4 py-3 w-full min-h-[3rem] dark:bg-gray-800 rounded-lg appearance-none focus:outline-none dark:hover:bg-proposal"
            type="datetime-local"
            placeholder="Search proposals, contracts"
          />
        </div>
        <div className="relative">
          <label className="absolute -top-6">Ends at</label>
          <span className="absolute top-1/2 -translate-y-1/2 left-4">
            <i className="bi bi-calendar-minus"></i>
          </span>
          <input
            value={filters.endAt}
            onInput={(e) => setFilters({ ...filters, endAt: (e.target as HTMLInputElement).value })}
            className="pl-10 pr-4 w-full min-h-[3rem] dark:bg-gray-800 rounded-lg appearance-none focus:outline-none dark:hover:bg-proposal"
            type="datetime-local"
            placeholder="Search proposals, contracts"
          />
        </div>
      </div>
      {loading && <div className="flex-center"><div className="loading w-28 h-28 border-8 border-t-primary" /></div>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {proposals.map((proposal) => <Card key={proposal.id} proposal={proposal} />)}
      </div>
    </main>
  )
}

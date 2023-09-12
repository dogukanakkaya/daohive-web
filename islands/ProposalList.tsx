import { useEffect, useState } from "preact/hooks";
import Time from "@/components/Proposals/Time.tsx";
import { Proposal } from "platform-api/src/utils/meilisearch/types.ts";
import Card from "@/components/Proposals/Card.tsx";

interface Props {
  proposals: Proposal[];
}

export default function ProposalList({ proposals: _proposals }: Props) {
  const [proposals, setProposals] = useState(_proposals);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    startAt: "",
    endAt: "",
  });

  useEffect(() => {
    const term = search.trim();
    if (filters.startAt === "" && filters.endAt === "") {
      if (term === "") return setProposals(_proposals);
      if (term.length < 3) return;
    }

    const timeout = setTimeout(async () => {
      const queryString = new URLSearchParams({ term, ...filters }).toString();
      const response = await fetch(`/api/proposals/search?${queryString}`);
      const data = await response.json();
      setProposals(data.proposals);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, filters]);

  return (
    <main>
      <div class="flex flex-col md:flex-row gap-8 md:gap-4 px-6 mb-8">
        <div className="relative flex-grow">
          <span class="absolute top-1/2 -translate-y-1/2 left-4">
            <i class="bi bi-search"></i>
          </span>
          <input
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            name="search"
            class="w-full pl-10 pr-4 py-3 dark:bg-gray-800 rounded-lg focus:outline-none dark:hover:bg-proposal"
            type="search"
            placeholder="Search proposals, contracts"
          />
        </div>
        <div className="relative">
          <label class="absolute -top-6">Starts at</label>
          <span class="absolute top-1/2 -translate-y-1/2 left-4">
            <i class="bi bi-calendar-date"></i>
          </span>
          <input
            value={filters.startAt}
            onInput={(e) => setFilters({ ...filters, startAt: (e.target as HTMLInputElement).value })}
            class="w-full pl-10 pr-4 py-3 dark:bg-gray-800 rounded-lg focus:outline-none dark:hover:bg-proposal"
            type="datetime-local"
            placeholder="Search proposals, contracts"
          />
        </div>
        <div className="relative">
          <label class="absolute -top-6">Ends at</label>
          <span class="absolute top-1/2 -translate-y-1/2 left-4">
            <i class="bi bi-calendar-minus"></i>
          </span>
          <input
            value={filters.endAt}
            onInput={(e) => setFilters({ ...filters, endAt: (e.target as HTMLInputElement).value })}
            class="w-full pl-10 pr-4 py-3 dark:bg-gray-800 rounded-lg focus:outline-none dark:hover:bg-proposal"
            type="datetime-local"
            placeholder="Search proposals, contracts"
          />
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-8 px-6">
        {proposals.map((proposal) => <Card proposal={proposal} />)}
      </div>
    </main>
  );
}

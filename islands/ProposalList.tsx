import { useEffect, useState } from "preact/hooks";
import Time from "@/components/Proposals/Time.tsx";

interface Props {
  // deno-lint-ignore no-explicit-any
  proposals: any[]; // @todo
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
      <div class="flex gap-4 px-6 mb-8">
        <div className="relative flex-grow">
          <span class="absolute top-1/2 -translate-y-1/2 left-4">
            <i class="bi bi-search"></i>
          </span>
          <input
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            name="search"
            class="w-full pl-10 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none hover:bg-proposal"
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
            class="w-full pl-10 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none hover:bg-proposal"
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
            class="w-full pl-10 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none hover:bg-proposal"
            type="datetime-local"
            placeholder="Search proposals, contracts"
          />
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-8 px-6">
        {proposals.map((proposal) => (
          <div class="dark:bg-proposal p-6 rounded-xl space-y-4 transition-transform hover:scale-[1.025]">
            <div>
              <img
                src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="rounded-xl"
                alt=""
              />
            </div>
            <div>
              <h1>
                <a href="#" class="text-2xl text-white font-semibold">{proposal.metadata.name}</a>
              </h1>
              <p class="mt-2 text-[#8bacda]">{proposal.metadata.description}</p>
            </div>
            <div class="flex gap-4">
              <span class="flex items-center justify-center w-1/3 h-16 bg-gray-900 hover:bg-opacity-50 rounded-xl cursor-pointer">
                Private <i class="bi bi-shield-check ml-2"></i>
              </span>
              <Time startAt={proposal.startAt * 1000} endAt={proposal.endAt * 1000} />
              <a href={`/proposals/${proposal.address}`} target="_blank" class="flex items-center justify-center w-1/3 h-16 bg-primary rounded-xl cursor-pointer">
                Read more <i class="bi bi-box-arrow-in-up-right ml-1"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

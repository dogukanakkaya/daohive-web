import { Proposal } from "platform-api/src/utils/meilisearch/types.ts";
import Time from "@/components/Proposals/Time.tsx";

export default function Card({ proposal }: { proposal: Proposal }) {
  return (
    <div class="bg-gray-50 dark:bg-proposal p-6 rounded-xl shadow space-y-4 transition-transform hover:scale-[1.025]">
      <div>
        <img
          src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="rounded-xl"
          alt=""
        />
      </div>
      <div>
        <h1>
          <a href={`/contracts/${proposal.address}/proposals/${proposal.id}`} class="text-2xl dark:text-white font-semibold">{proposal.metadata.name}</a>
        </h1>
        <p class="mt-2 dark:text-[#8bacda]">{proposal.metadata.description}</p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex gap-4 w-full sm:w-2/3">
          <span class="flex items-center justify-center w-1/2 h-16 bg-gray-200 dark:bg-gray-900 hover:bg-opacity-50 rounded-xl cursor-pointer">
            Private <i class="bi bi-shield-check ml-2"></i>
          </span>
          <Time class="w-1/2 h-16 cursor-pointer" startAt={proposal.startAt * 1000} endAt={proposal.endAt * 1000} />
        </div>
        <a
          href={`/contracts/${proposal.address}/proposals/${proposal.id}`}
          target="_blank"
          class="flex items-center justify-center sm:w-1/3 h-16 text-gray-300 bg-primary rounded-xl cursor-pointer"
        >
          Read more <i class="bi bi-box-arrow-in-up-right ml-1"></i>
        </a>
      </div>
    </div>
  );
}

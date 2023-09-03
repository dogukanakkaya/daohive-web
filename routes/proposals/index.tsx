import { Handlers } from "$fresh/server.ts";
import { meilisearch } from "@/utils/meilisearch.ts";
import ProposalList from "@/islands/ProposalList.tsx";
import { Proposal } from "platform-api/src/utils/meilisearch/types.ts";

interface HandlerData {
  proposals: Proposal[];
}

export const handler: Handlers<HandlerData> = {
  async GET(_req, ctx) {
    const { results } = await meilisearch.index("proposals").getDocuments<Proposal>({ limit: 30 });
    return ctx.render({ proposals: results });
  },
};

export default function Proposals({ data: { proposals } }: { data: HandlerData }) {
  return <ProposalList proposals={proposals} />;
}

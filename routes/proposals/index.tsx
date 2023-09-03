import { Handlers } from "$fresh/server.ts";
import { meilisearch } from "@/utils/meilisearch.ts";
import ProposalList from "@/islands/ProposalList.tsx";

interface HandlerData {
  // deno-lint-ignore no-explicit-any
  proposals: any[]; // @todo
}

export const handler: Handlers<HandlerData> = {
  async GET(_req, ctx) {
    const { results } = await meilisearch.index("proposals").getDocuments({ limit: 30 });
    return ctx.render({ proposals: results });
  },
};

export default function Proposals({ data: { proposals } }: { data: HandlerData }) {
  return <ProposalList proposals={proposals} />;
}

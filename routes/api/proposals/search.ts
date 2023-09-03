import { HandlerContext } from "$fresh/server.ts";
import { meilisearch } from "@/utils/meilisearch.ts";

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {
  const searchParams = new URL(req.url).searchParams;
  const term = searchParams.get("term");
  const startAt = searchParams.get("startAt");
  const endAt = searchParams.get("endAt");

  let filter = "";

  if (startAt) {
    filter += `startAt <= ${new Date(startAt).getTime() / 1000}`;
  }
  if (endAt) {
    filter += ` AND endAt > ${new Date(endAt).getTime() / 1000}`;
  }

  const { hits } = await meilisearch.index("proposals").search(term, { filter });

  return new Response(JSON.stringify({ proposals: hits }));
};

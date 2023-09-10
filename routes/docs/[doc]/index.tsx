import { render } from "$gfm";
import { Handlers, PageProps } from "$fresh/server.ts";

const sections = Object.freeze({
  introduction: await Deno.readTextFile("./docs/introduction.md"),
  contract: await Deno.readTextFile("./docs/contract.md"),
  proposal: await Deno.readTextFile("./docs/proposal.md"),
  voter: await Deno.readTextFile("./docs/voter.md"),
  "voter-group": await Deno.readTextFile("./docs/voter_group.md"),
});

export const handler: Handlers = {
  GET(req, ctx) {
    if (!(ctx.params.doc in sections)) {
      const url = `${new URL(req.url).origin}/docs/introduction`;
      return Response.redirect(url, 307);
    }
    return ctx.render();
  },
};

export default function Doc({ params }: PageProps) {
  return (
    <div
      data-color-mode="auto"
      data-light-theme="light"
      data-dark-theme="dark"
      className="markdown-body bg-transparent!"
      dangerouslySetInnerHTML={{ __html: render(sections[params.doc as keyof typeof sections]) }}
    />
  );
}

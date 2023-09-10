import { LayoutProps } from "$fresh/server.ts";
import "https://esm.sh/prismjs@1.29.0/components/prism-typescript?no-check";
import "https://esm.sh/prismjs@1.29.0/components/prism-graphql?no-check";

const links = Object.freeze([
  {
    title: "Introduction",
    href: "/docs/introduction",
    children: [
      { title: "Overview", href: "/docs/introduction#overview" },
      { title: "Transaction Fees", href: "/docs/introduction#transaction-fees" },
      { title: "Global Types", href: "/docs/introduction#global-types" },
      { title: "Additional Context", href: "/docs/introduction#additional-context" },
    ],
  },
  {
    title: "Contract",
    href: "/docs/contract",
    children: [
      { title: "Fetch", href: "/docs/contract#fetch" },
      { title: "Deploy", href: "/docs/contract#deploy" },
      { title: "Whitelist", href: "/docs/contract#whitelist" },
      { title: "Voter weights", href: "/docs/contract#voter-weights" },
    ],
  },
  {
    title: "Proposal",
    href: "/docs/proposal",
    children: [
      { title: "Fetch", href: "/docs/proposal#fetch" },
      { title: "Create", href: "/docs/proposal#create" },
    ],
  },
  {
    title: "Voter",
    href: "/docs/voter",
    children: [
      { title: "Fetch", href: "/docs/voter#fetch" },
      { title: "Create", href: "/docs/voter#create" },
      { title: "Update", href: "/docs/voter#update" },
      { title: "Delete", href: "/docs/voter#delete" },
    ],
  },
  {
    title: "Voter Group",
    href: "/docs/voter-group",
    children: [
      { title: "Fetch", href: "/docs/voter-group#fetch" },
      { title: "Create", href: "/docs/voter-group#create" },
      { title: "Update", href: "/docs/voter-group#update" },
      { title: "Delete", href: "/docs/voter-groupd#delete" },
    ],
  },
]);

export default function Layout({ Component, url }: LayoutProps) {
  const activeLinkIndex = links.findIndex((link) => link.href === url.pathname);
  const prevLink = activeLinkIndex !== -1 ? links[activeLinkIndex - 1] : undefined;
  const nextLink = activeLinkIndex !== -1 ? links[activeLinkIndex + 1] : undefined;

  return (
    <div class="md:px-6">
      <div className="md:grid grid-cols-6 gap-8">
        <div className="hidden md:block col-span-1">
          <div className="sticky top-28">
            {links.map((link) => (
              <div class="mb-6">
                <h2 class="uppercase text-gray-500 font-semibold mb-2">{link.title}</h2>
                <ul>
                  {link.children.map((child) => (
                    <li>
                      <a href={child.href} class="py-1 block transition hover:text-primary">{child.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-5">
          <Component />
        </div>
      </div>
      <div className="px-6 flex justify-between md:hidden">
        <span>
          {prevLink && (
            <a href={prevLink.href} class="text-lg">
              <i class="bi bi-chevron-double-left"></i> {prevLink.title}
            </a>
          )}
        </span>
        <span>
          {nextLink && (
            <a href={nextLink.href} class="text-lg">
              {nextLink.title} <i class="bi bi-chevron-double-right"></i>
            </a>
          )}
        </span>
      </div>
    </div>
  );
}

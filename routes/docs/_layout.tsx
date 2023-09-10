import { LayoutProps } from "$fresh/server.ts";
import "https://esm.sh/prismjs@1.29.0/components/prism-typescript?no-check";
import "https://esm.sh/prismjs@1.29.0/components/prism-graphql?no-check";

const links = Object.freeze([
  {
    title: "Introduction",
    children: [
      { title: "Overview", href: "/docs/introduction#overview" },
      { title: "Transaction Fees", href: "/docs/introduction#transaction-fees" },
      { title: "Global Types", href: "/docs/introduction#global-types" },
      { title: "Additional Context", href: "/docs/introduction#additional-context" },
    ],
  },
  {
    title: "Contract",
    children: [
      { title: "Fetch", href: "/docs/contract#fetch" },
      { title: "Deploy", href: "/docs/contract#deploy" },
      { title: "Whitelist", href: "/docs/contract#whitelist" },
      { title: "Voter weights", href: "/docs/contract#voter-weights" },
    ],
  },
  {
    title: "Proposal",
    children: [
      { title: "Fetch", href: "/docs/proposal#fetch" },
      { title: "Create", href: "/docs/proposal#create" },
    ],
  },
  {
    title: "Voter",
    children: [
      { title: "Fetch", href: "/docs/voter#fetch" },
      { title: "Create", href: "/docs/voter#create" },
      { title: "Update", href: "/docs/voter#update" },
      { title: "Delete", href: "/docs/voter#delete" },
    ],
  },
  {
    title: "Voter Group",
    children: [
      { title: "Fetch", href: "/docs/voter-group#fetch" },
      { title: "Create", href: "/docs/voter-group#create" },
      { title: "Update", href: "/docs/voter-group#update" },
      { title: "Delete", href: "/docs/voter-groupd#delete" },
    ],
  },
]);

export default function Layout({ Component }: LayoutProps) {
  return (
    <div class="md:px-6">
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-1">
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
    </div>
  );
}

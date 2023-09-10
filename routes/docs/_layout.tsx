import { LayoutProps } from "$fresh/server.ts";

const links = Object.freeze([
  {
    title: "Introduction",
    children: [
      { title: "Overview", href: "/docs" },
    ],
  },
  {
    title: "Contracts",
    children: [
      { title: "Fetch", href: "/docs/contracts#fetch" },
      { title: "Deploy", href: "/docs/contracts#deploy" },
      { title: "Change whitelist", href: "/docs/contracts#whitelist" },
      { title: "Voter weights", href: "/docs/contracts#weights" },
      { title: "Transaction Fee", href: "/docs/contracts#fee" },
    ],
  },
  {
    title: "Proposals",
    children: [
      { title: "Fetch", href: "/docs/proposals#fetch" },
      { title: "Create", href: "/docs/proposals#create" },
      { title: "Transaction Fee", href: "/docs/proposals#fee" },
    ],
  },
  {
    title: "Voters",
    children: [
      { title: "Fetch", href: "/docs/voters#fetch" },
      { title: "Create", href: "/docs/voters#create" },
      { title: "Update", href: "/docs/voters#update" },
      { title: "Delete", href: "/docs/voters#delete" },
    ],
  },
]);

export default function Layout({ Component }: LayoutProps) {
  return (
    <div class="md:px-60">
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-1">
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
        <div className="col-span-5">
          <Component />
        </div>
      </div>
    </div>
  );
}

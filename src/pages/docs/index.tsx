import { Helmet } from 'react-helmet-async'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'

const links = Object.freeze([
  {
    title: 'Introduction',
    href: '/docs/introduction',
    children: [
      { title: 'Overview', href: '/docs/introduction#overview' },
      { title: 'Transaction Fees', href: '/docs/introduction#transaction-fees' },
      { title: 'Global Types', href: '/docs/introduction#global-types' },
      { title: 'Additional Context', href: '/docs/introduction#additional-context' }
    ]
  },
  {
    title: 'Contract',
    href: '/docs/contract',
    children: [
      { title: 'Fetch', href: '/docs/contract#fetch' },
      { title: 'Deploy', href: '/docs/contract#deploy' },
      { title: 'Whitelist', href: '/docs/contract#whitelist' },
      { title: 'Voter weights', href: '/docs/contract#voter-weights' }
    ]
  },
  {
    title: 'Proposal',
    href: '/docs/proposal',
    children: [
      { title: 'Fetch', href: '/docs/proposal#fetch' },
      { title: 'Create', href: '/docs/proposal#create' }
    ]
  },
  {
    title: 'Voter',
    href: '/docs/voter',
    children: [
      { title: 'Fetch', href: '/docs/voter#fetch' },
      { title: 'Create', href: '/docs/voter#create' },
      { title: 'Update', href: '/docs/voter#update' },
      { title: 'Delete', href: '/docs/voter#delete' }
    ]
  },
  {
    title: 'Voter Group',
    href: '/docs/voter-group',
    children: [
      { title: 'Fetch', href: '/docs/voter-group#fetch' },
      { title: 'Create', href: '/docs/voter-group#create' },
      { title: 'Update', href: '/docs/voter-group#update' },
      { title: 'Delete', href: '/docs/voter-groupd#delete' }
    ]
  }
])

export default function Docs() {
  const { id } = useParams()

  const activeLinkIndex = links.findIndex((link) => link.href === `/docs/${id}`)
  const prevLink = activeLinkIndex !== -1 ? links[activeLinkIndex - 1] : undefined
  const nextLink = activeLinkIndex !== -1 ? links[activeLinkIndex + 1] : undefined

  return (
    <div className="px-6">
      <Helmet>
        <title>Docs</title>
      </Helmet>
      <div className="md:grid grid-cols-6 gap-8">
        <div className="hidden md:block col-span-1">
          <div className="sticky top-28">
            {links.map((link) => (
              <div className="mb-6" key={link.href}>
                <h2 className="uppercase text-gray-500 font-semibold mb-2">{link.title}</h2>
                <ul>
                  {link.children.map((child) => (
                    <li key={child.href}>
                      {
                        child.href.startsWith(links[activeLinkIndex]?.href)
                          ? <a href={child.href} className="py-1 block transition hover:text-primary">{child.title}</a>
                          : <NavLink to={child.href} className="py-1 block transition hover:text-primary">{child.title}</NavLink>
                      }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-5">
          <Outlet />
        </div>
      </div>
      <div className="flex justify-between mt-4 md:hidden">
        <span>
          {prevLink && (
            <Link to={prevLink.href} className="text-lg">
              <i className="bi bi-chevron-double-left"></i> {prevLink.title}
            </Link>
          )}
        </span>
        <span>
          {nextLink && (
            <Link to={nextLink.href} className="text-lg">
              {nextLink.title} <i className="bi bi-chevron-double-right"></i>
            </Link>
          )}
        </span>
      </div>
    </div>
  )
}

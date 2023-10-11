import Button, { Variant } from '@/components/Button.tsx'
import { PLATFORM_URL } from '@/config'
import { useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const inputRef = useRef<HTMLInputElement>(null)
  const location = useLocation()

  useEffect(() => {
    inputRef.current?.click()
  }, [location])

  return (
    <div className="bg-header sticky top-0 shadow z-10">
      <header className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link className="flex items-center gap-4 mr-20" to="/">
          <img src="/logo.svg" width={60} alt="" />
          <h1 className="text-3xl font-semibold">daohive</h1>
        </Link>
        <input ref={inputRef} id="mobile-menu" className="hidden peer" type="checkbox" />
        <nav className="top-[theme('spacing.20')] left-0 h-[calc(100vh-theme('spacing.20'))] w-full absolute transition-transform -translate-x-full gap-8 bg-gradient-to-b from-header to-gray-100 dark:to-gray-900 md:static md:flex md:w-auto md:h-auto md:bg-none md:translate-x-0 peer-checked:translate-x-0">
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <NavLink to="/proposals" className="nav-link">Proposals</NavLink>
            </li>
            <li>
              <NavLink to="/docs/introduction" className="nav-link">Docs</NavLink>
            </li>
          </ul>
          <ul className="flex gap-4 mt-4 px-4 md:mt-0 md:px-0">
            <li>
              <a href={PLATFORM_URL} target="_blank">
                <Button variant={Variant.Primary} className="text-lg">
                  Platform
                </Button>
              </a>
            </li>
          </ul>
        </nav>
        <label htmlFor="mobile-menu" className="md:hidden">
          <span className="mobile-line" />
          <span className="mobile-line" />
          <span className="mobile-line" />
        </label>
      </header>
    </div>
  )
}

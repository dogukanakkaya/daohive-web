import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Layout() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daohive</title>
        <link rel="canonical" href="https://daohive.io" />
      </Helmet>
      <Header />
      <div className="container mx-auto mt-8">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

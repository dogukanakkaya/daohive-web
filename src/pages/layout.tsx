import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'

export default function Layout() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daohive</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="canonical" href="https://daohive.io" />
      </Helmet>
      <Header />
      <div className="container mx-auto mt-8">
        <Outlet />
      </div>
      <Footer />
    </HelmetProvider>
  )
}

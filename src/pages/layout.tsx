import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'

export default function Layout() {
  const location = useLocation()

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daohive</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="canonical" href={`https://daohive.io/${location.pathname}`} />
        <meta name="description" content="Our platform bridges innovation and community, leaning into decentralized<br />decision-making and letting users co-design the next chapter" />
        <meta name="keywords" content="Dao, Blockchain, Smart Contracts" />
        <meta name="author" content="dogukanakkaya" />
        <meta property="og:title" content="Daohive" />
        <meta property="og:description" content="Our platform bridges innovation and community, leaning into decentralized<br />decision-making and letting users co-design the next chapter" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://daohive.io/${location.pathname}`} />
        <meta property="og:image" content="https://daohive.io/home.png" />
      </Helmet>
      <Header />
      <div className="container mx-auto mt-8">
        <Outlet />
      </div>
      <Footer />
    </HelmetProvider>
  )
}

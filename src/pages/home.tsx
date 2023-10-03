import Faq from '@/components/Home/Sections/Faq.tsx'
import Traits from '@/components/Home/Sections/Traits.tsx'
import Journey from '@/components/Home/Sections/Journey.tsx'
import Features from '@/components/Home/Sections/Features.tsx'
import { WEBVIEW_URL } from '@/config.ts'

export default function Home() {
  return (
    <>
      <section className="grid place-items-center md:grid-cols-2 md:gap-8">
        <div className="text-center md:text-left px-6">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-semibold text-gray-900 dark:text-white">
            <span className="text-gradient-primary">A DAO</span> for the people, <span className="text-gradient-primary">by the people,</span> shaping our future together
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-5 text-sm tracking-wider">
            Our platform bridges innovation and community, leaning into decentralized<br />decision-making and letting users co-design the next chapter
          </p>
        </div>
        <div className="w-full h-[550px] md:h-[800px]">
          <iframe src={WEBVIEW_URL} width="100%" height="100%" />
        </div>
      </section>
      <Traits />
      <Journey />
      <Features />
      <Faq />
    </>
  )
}

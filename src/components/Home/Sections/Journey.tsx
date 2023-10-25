import Button, { Variant } from '@/components/Button.tsx'
import { PLATFORM_URL } from '@/config'

export default function Journey() {
  return (
    <section className="mt-20 py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center md:text-left px-6">
        <h3 className="text-2xl md:text-4xl font-semibold dark:text-white">
          Begin your <span className="text-gradient-primary">DAO</span> journey today
        </h3>
        <p className="md:text-xl dark:text-white">Embrace the new era of decentralized governance and active community participation.</p>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <a href={PLATFORM_URL} target="_blank">
          <Button className="w-max">
            Use Platform
          </Button>
        </a>
        <Button variant={Variant.Secondary} className="w-max">Documentation</Button>
      </div>
    </section>
  )
}

import Faq from "@/components/Home/Sections/Faq.tsx";
import Traits from "@/components/Home/Sections/Traits.tsx";
import Journey from "@/components/Home/Sections/Journey.tsx";
import Features from "@/components/Home/Sections/Features.tsx";

export default function Home() {
  return (
    <>
      <section class="grid place-items-center md:(grid-cols-2 gap-8)">
        <div class="text-center md:text-left px-6">
          <h1 class="text-4xl sm:text-6xl xl:text-7xl font-semibold text-gray-900 dark:text-white">
            <span class="text-gradient-primary">A DAO</span> for the people, <span class="text-gradient-primary">by the people,</span> shaping our future together
          </h1>
          <p class="text-gray-500 dark:text-gray-400 mt-5 text-sm tracking-wider">
            Our platform bridges innovation and community, leaning into decentralized<br />decision-making and letting users co-design the next chapter
          </p>
        </div>
        <div class="w-full h-[550px] md:h-[800px]">
          <iframe src="http://localhost:5500" width="100%" height="100%" />
        </div>
      </section>
      <Traits />
      <Journey />
      <Features />
      <Faq />
    </>
  );
}

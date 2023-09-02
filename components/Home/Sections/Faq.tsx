import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";

const faq = Object.freeze([
  {
    title: "How to start with Daohive?",
    content: "TODO",
  },
  {
    title: "Do I have to pay?",
    content:
      "You only pay for what you do. Preload a desired balance and pay for **transaction fees** when you deploy contracts, add proposals, change your whitelist. **No subscription!**",
  },
]);

function Faq() {
  return (
    <section class="mt-20 grid place-items-center px-6">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      {faq.map(({ title, content }, i) => (
        <details key={i} className="w-full md:w-1/2 my-2 rounded shadow cursor-pointer bg-white bg-hover:bg-gray-100 dark:bg-[#010102] hover:dark:bg-black hover:dark:shadow-xl">
          <summary className="flex justify-between items-center cursor-pointer text-xl px-6 py-4 focus:outline-none">
            <span>{title}</span>
            <i className="bi bi-chevron-down transition-transform duration-300">
            </i>
          </summary>
          <div
            className="px-6 pb-4 prose dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500"
            dangerouslySetInnerHTML={{ __html: render(content) }}
          />
        </details>
      ))}
    </section>
  );
}

export default Faq;

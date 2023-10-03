import { marked } from 'marked'

const faq = Object.freeze([
  {
    title: 'How to start with Daohive?',
    content: 'Start your journey by signing in to our platform. Once logged in, you\'ll have immediate access to the tools and features that enable you to add proposals, manage smart contracts, add voters, and integrate your organization\'s systems using our powerful API. It\'s as simple as that!'
  },
  {
    title: 'Do I have to pay?',
    content:
      'You only pay for what you do. Preload a desired balance and pay for **transaction fees** when you deploy contracts, add proposals, change your whitelist. **No subscription!**'
  }
])

function Faq() {
  return (
    <section className="mt-20 grid place-items-center px-6">
      {faq.map(({ title, content }, i) => (
        <details key={i} className="w-full md:w-1/2 my-2 rounded shadow cursor-pointer bg-white bg-hover:bg-gray-100 dark:bg-[#010102] hover:dark:bg-black hover:dark:shadow-xl">
          <summary className="flex justify-between items-center cursor-pointer text-xl px-6 py-4 focus:outline-none">
            <span>{title}</span>
            <i className="bi bi-chevron-down transition-transform duration-300">
            </i>
          </summary>
          <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} className="px-6 py-4 prose dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500" />
        </details>
      ))}
    </section>
  )
}

export default Faq

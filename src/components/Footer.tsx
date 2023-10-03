export default function Footer() {
  return (
    <footer className="container mx-auto flex flex-col-reverse gap-6 justify-between items-center mt-10 mb-5 px-6 md:flex-row md:h-20 md:mb-0">
      <p>All Rights Reserved © {new Date().getFullYear()}</p>
      <ul className="flex items-center divide-x dark:divide-gray-700">
        <li>
          <a href="#" className="px-6">Terms</a>
        </li>
        <li>
          <a href="#" className="px-6">Privacy</a>
        </li>
        <li>
          <a href="#" className="px-6">Support</a>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li>
          <a href="#">
            <i className="bi bi-github text-xl"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-discord text-xl"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-envelope-at text-xl"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

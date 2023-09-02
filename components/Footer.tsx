export default function Footer() {
  return (
    <footer class="container mx-auto flex justify-between items-center h-20 mt-20">
      <p>All Rights Reserved © {new Date().getFullYear()}</p>
      <ul class="flex items-center divide-x dark:divide-gray-700">
        <li>
          <a href="#" class="px-6">Terms</a>
        </li>
        <li>
          <a href="#" class="px-6">Privacy</a>
        </li>
        <li>
          <a href="#" class="px-6">Support</a>
        </li>
      </ul>
      <ul class="flex items-center gap-4">
        <li>
          <a href="#">
            <i class="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-discord"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-envelope-at"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

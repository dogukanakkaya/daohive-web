export default function Footer() {
  return (
    <footer class="container mx-auto flex flex-col flex-col-reverse gap-6 justify-between items-center mt-20 mb-5 md:(flex-row h-20 mb-0)">
      <p>All Rights Reserved © {new Date().getFullYear()}</p>
      <ul class="flex items-center divide-x dark:divide-gray-700">
        <li><a href="#" class="px-6">Terms</a></li>
        <li><a href="#" class="px-6">Privacy</a></li>
        <li><a href="#" class="px-6">Support</a></li>
      </ul>
      <ul class="flex items-center gap-4">
        <li><a href="#"><i class="bi bi-github text-xl"></i></a></li>
        <li><a href="#"><i class="bi bi-discord text-xl"></i></a></li>
        <li><a href="#"><i class="bi bi-envelope-at text-xl"></i></a></li>
      </ul>
    </footer>
  );
}

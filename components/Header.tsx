export default function Header() {
  return (
    <header class="flex items-center h-24">
      <div class="flex items-center mr-48">
        <img src="" alt="" />
        <h1 class="text-3xl font-semibold">daohive</h1>
      </div>
      <ul class="flex items-center gap-4">
        <li>
          <a href="#" class="block font-semibold text-lg p-2">Home</a>
        </li>
        <li>
          <a href="#" class="block font-semibold text-lg p-2">Docs</a>
        </li>
        <li>
          <a href="#" class="block font-semibold text-lg p-2">About</a>
        </li>
      </ul>
    </header>
  );
}

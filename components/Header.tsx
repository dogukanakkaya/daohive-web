import Button, { Variant } from "@/components/Button.tsx";

export default function Header() {
  return (
    <div class="bg-gray-50 dark:bg-[#040a15] sticky top-0 shadow">
      <header class="container mx-auto flex items-center justify-between h-20">
        <div class="flex items-center gap-4 mr-20">
          <img
            src="https://fresh.deno.dev/logo.svg?__frsh_c=30f6c694a16b12b2ef3fbaf7d026e2dfb30e9852"
            alt=""
          />
          <h1 class="text-3xl font-semibold">daohive</h1>
        </div>
        <div class="flex gap-8">
          <ul class="flex gap-4">
            <li>
              <a href="#" class="nav-link">Features</a>
            </li>
            <li>
              <a href="#" class="nav-link">Pricing</a>
            </li>
            <li>
              <a href="#" class="nav-link">Docs</a>
            </li>
            <li>
              <a href="#" class="nav-link">FAQ</a>
            </li>
          </ul>
          <ul class="flex gap-4">
            <li>
              <Button variant={Variant.Primary}>Platform</Button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

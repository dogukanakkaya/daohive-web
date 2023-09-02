import Button, { Variant } from "@/components/Button.tsx";
import { tw } from "twind";

export default function Header() {
  return (
    <div class="bg-header sticky top-0 shadow">
      <header class="container mx-auto flex items-center justify-between h-20 px-6">
        <div class="flex items-center gap-4 mr-20">
          <img src="https://fresh.deno.dev/logo.svg?__frsh_c=30f6c694a16b12b2ef3fbaf7d026e2dfb30e9852" alt="" />
          <h1 class="text-3xl font-semibold">daohive</h1>
        </div>
        <input id="mobile-menu" class="hidden is-checked:sibling:translate-x-0" type="checkbox" />
        <nav
          class={tw(
            `top-[${tw.theme("spacing.20")}] left-0 h-[calc(100vh-${
              tw.theme("spacing.20")
            })] w-full absolute transition transition-transform -translate-x-full gap-8 bg-gradient-to-b from-header to-gray-100 dark:to-gray-900 md:(static flex w-auto h-auto bg-none translate-x-0)`,
          )}
        >
          <ul class="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#" class="nav-link">Proposals</a>
            </li>
            <li>
              <a href="#" class="nav-link">Docs</a>
            </li>
          </ul>
          <ul class="flex gap-4 mt-4 px-4 md:(mt-0 px-0)">
            <li>
              <Button variant={Variant.Primary} class="text-lg">Platform</Button>
            </li>
          </ul>
        </nav>
        <label for="mobile-menu" class="md:hidden">
          <span class="mobile-line" />
          <span class="mobile-line" />
          <span class="mobile-line" />
        </label>
      </header>
    </div>
  );
}

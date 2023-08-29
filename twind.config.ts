import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";

export default {
  selfURL: import.meta.url,
  preflight: {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap')",
    body: apply`text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-[#070d19]`,
    ".nav-link":
      apply`block font-semibold text-lg px-4 py-2 transition hover:text-primary`,
    ".button":
      apply`py-1 px-3 lg:py-2 lg:px-6 rounded-lg font-medium w-full text-lg hover:opacity-90 focus:outline-none`,
  },
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        "primary": "#1d897c",
      },
    },
  },
} as Options;

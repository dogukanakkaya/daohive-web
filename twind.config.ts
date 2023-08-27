import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";

export default {
  selfURL: import.meta.url,
  preflight: {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap')",
    body: apply`text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800`,
  },
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
  },
} as Options;

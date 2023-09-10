import { Options } from "$fresh/plugins/twind.ts";
import { apply, CSSRules } from "twind";
import { gray } from "twind/colors";

export default {
  selfURL: import.meta.url,
  preflight: (preflight, { theme }) => ({
    ...preflight,
    "@import": [
      "url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap')",
      "url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css')",
    ],
    ":root": {
      "--bg-header": gray["50"],
      ...preflight[":root"] as CSSRules,
    },
    "@media (prefers-color-scheme: dark)": {
      ":root": {
        "--bg-header": "#040a15",
      },
    },
    html: {
      scrollPaddingTop: theme("spacing.24"),
      ...preflight["html"] as CSSRules,
    },
    body: apply`text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-[#070d19]`,
    ".nav-link": apply`block font-semibold text-lg px-4 py-2 transition hover:text-primary`,
    ".button": apply`py-2 px-6 rounded-lg font-medium w-full hover:opacity-90 focus:outline-none`,
    ".text-gradient-primary": apply`text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400`,
    ".mobile-line": apply`w-8 h-0.5 flex mb-2 bg-black dark:bg-white rounded-sm transition-transform transform`,
    // @todo: move these to html with is-checked variant but can't select a specific sibling for input (also peer does not work there)
    "#mobile-menu:checked ~ [for=mobile-menu] span:nth-child(1)": apply`-rotate-45 translate-y-2.5`,
    "#mobile-menu:checked ~ [for=mobile-menu] span:nth-child(2)": apply`rotate-45`,
    "#mobile-menu:checked ~ [for=mobile-menu] span:nth-child(3)": apply`hidden`,
    ".no-anchor": {
      ".anchor": apply`hidden`,
    },
  }),
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        "primary": "#431fd9",
        "header": "var(--bg-header)",
        "proposal": "#14253d",
      },
    },
  },
  variants: {
    "not-last": "&:not(:last-child)",
    "is-checked": "&:checked",
  },
} as Options;

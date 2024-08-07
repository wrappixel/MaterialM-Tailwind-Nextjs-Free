import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Flowbite content
    flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow: {
        md: "0px 1px 4px 0px rgba(133, 146, 173, 0.2)",
        lg: "0 1rem 3rem rgba(0, 0, 0, 0.175)",
        "dark-md":
          "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.02) 0px 12px 24px -4px",
        sm: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
        "btn-shadow": "box-shadow: rgba(0, 0, 0, .05) 0 9px 17.5px",
      },
      borderRadius: {
        sm: "7px",
        md: "9px",
        lg: "24px",
        tw: "12px",
      },
      container: {
        center: true,
        padding: "30px",
      },
      gap: {
        "30": "30px",
      },
      padding: {
        "30": "30px",
      },
      margin: {
        "30": "30px",
      },

      colors: {
        cyan: {
          "500": "var(--color-primary)",
          "600": "var(--color-primary)",
          "700": "var(--color-primary)",
        },
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        info: "var(--color-info)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        lightprimary: "var(--color-lightprimary)",
        lightsecondary: "var(--color-lightsecondary)",
        lightsuccess: "var( --color-lightsuccess)",
        lighterror: "var(--color-lighterror)",
        lightinfo: "var(--color-lightinfo)",
        lightwarning: "var(--color-lightwarning)",
        border: "var(--color-border)",
        bordergray: "var(--color-bordergray)",
        lightgray: "var( --color-lightgray)",
        muted: "var(--color-muted)",
        dark: "var(--color-dark)",
        link: "var(--color-link)",
        darklink: "var(--color-darklink)",
      },
    },
  },
  plugins: [
    //Add Flowbite Plugin

    require("flowbite/plugin"),
  ],
};
export default config;

import { defineConfig } from "wxt"

export default defineConfig({
  imports: false,
  modules: ["@wxt-dev/auto-icons"],
  outDir: "build",
  zip: {
    artifactTemplate: "{{browser}}-{{manifestVersion}}-prod.zip"
  },
  manifest: ({ browser }) => ({
    name: "Skebify",
    description: "A more modern version of the Skeb Button extension.",
    author: browser === "firefox" ? "Mark Ignacio, idunafu" : "Mark Ignacio",
    action: {
      default_icon: {
        16: "/icons/16.png",
        32: "/icons/32.png",
        48: "/icons/48.png",
        128: "/icons/128.png"
      }
    },
    default_locale: "en",
    host_permissions: ["https://skeb.jp/api/*"],
    browser_specific_settings:
      browser === "firefox"
        ? {
            gecko: {
              id: "skebify@idnf.dev"
            }
          }
        : undefined
  })
})

import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://www.imdb.com/",
    "https://www.imdb.com/*",
    "https://www.imdb.com/title/*"
  ],
  css: ["../style/imdb.css"],
  run_at: "document_start" // must specify this for css injection to occur before dom is loaded in firefox
}

import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://www.imdb.com/",
    "https://www.imdb.com/*",
    "https://www.imdb.com/title/*"
  ],
  css: ["../style/imdb.css"]
}

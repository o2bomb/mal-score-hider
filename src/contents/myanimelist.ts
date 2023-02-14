import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://myanimelist.net/anime/*/*",
    "https://myanimelist.net/manga/*/*"
  ],
  css: ["../style/myanimelist.css"]
}

window.addEventListener("load", () => {
  // Hide hover styles if score is N/A
  const collection = document.getElementsByClassName("score-label score-na")
  if (collection.length === 0) return
  const hideStyle = document.createElement("style")
  hideStyle.innerText = `
    div.score-label.score-na::after {
      display: none;
    }

    div[data-id="info1"]::after {
      display: none;
    }
  `
  document.body.appendChild(hideStyle)
})

import IMDBFaviconPNG from "data-base64:../assets/imdb_favicon.png"
import MALFaviconPNG from "data-base64:../assets/mal_favicon.png"
import { useEffect, useState } from "react"
import styled from "styled-components"

import "./index.css"

function IndexPopup() {
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    chrome.tabs.query(
      {
        currentWindow: true, // currently focused window
        active: true // selected tab
      },
      function (foundTabs) {
        if (foundTabs.length > 0) {
          const url = foundTabs[0].url
          try {
            const { hostname } = new URL(url)
            switch (hostname) {
              case "imdb.com":
              case "www.imdb.com":
              case "myanimelist.net":
              case "www.myanimelist.net":
                setIsEnabled(true)
            }
          } catch (e) {
            console.warn("Failed to parse active tab URL:", e)
          }
        }
      }
    )
  }, [])

  return (
    <Base>
      <h1>MAL Score Hider</h1>
      {isEnabled ? (
        <Enabled>Is enabled on this site</Enabled>
      ) : (
        <Disabled>
          <p>Is inactive. Currently only supports the following sites:</p>
          <ul>
            <li>
              <a href="https://myanimelist.net/" target="_blank">
                <img src={MALFaviconPNG} alt="myanimelist.net favicon" />
                myanimelist.net
              </a>
            </li>
            <li>
              <a href="https://imdb.com/" target="_blank">
                <img src={IMDBFaviconPNG} alt="imdb.com favicon" />
                imdb.com
              </a>
            </li>
          </ul>
        </Disabled>
      )}
    </Base>
  )
}

export default IndexPopup

const Base = styled.div`
  padding: 1rem;
  color: white;
  background-color: black;

  h1 {
    margin-bottom: 0.5rem;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;
  }
`

const Enabled = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: limegreen;
  text-transform: uppercase;
`

const Disabled = styled.div`
  p {
    margin-bottom: 0.5rem;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  a,
  a:link,
  a:active,
  a:visited {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    img {
      width: 1rem;
      height: 1rem;
      margin-right: 0.2rem;
    }
  }
`

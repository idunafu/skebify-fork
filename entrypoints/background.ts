import { defineBackground } from "#imports"
import { browser } from "wxt/browser"

import type { SkebUserResponse, TwitterMessage } from "~/lib"

async function getSkebProfileInfo(
  uid: string
): Promise<SkebUserResponse | null> {
  const response = await fetch(
    `https://skeb.jp/api/users/exists?twitter_uid=${uid}`,
    {
      headers: {
        Accept: "application/json"
      }
    }
  )
  try {
    return await response.json()
  } catch {
    return null
  }
}

export default defineBackground(() => {
  browser.runtime.onMessage.addListener((message, _, sendMessage) => {
    console.log(message)
    const spi = getSkebProfileInfo((message as TwitterMessage).id)
    spi
      .then((response) => {
        console.log(response)
        if (response) {
          sendMessage(response)
        }
      })
      .catch(console.error)
    return true
  })
})

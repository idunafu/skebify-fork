import { defineBackground } from "#imports"
import { browser } from "wxt/browser"

import type { SkebUserResponse, TwitterMessage } from "~/lib"

async function getSkebProfileInfo(
  uid: string
): Promise<SkebUserResponse | null> {
  const url = new URL("https://skeb.jp/api/users/exists")
  url.searchParams.set("twitter_uid", uid)

  const response = await fetch(url, {
    headers: {
      Accept: "application/json"
    }
  })
  try {
    return await response.json()
  } catch {
    return null
  }
}

export default defineBackground(() => {
  browser.runtime.onMessage.addListener((message, _, sendMessage) => {
    const uid = (message as Partial<TwitterMessage>).id
    if (typeof uid !== "string" || uid.length === 0) {
      sendMessage(null)
      return false
    }

    getSkebProfileInfo(uid).then(sendMessage, () => sendMessage(null))
    return true
  })
})

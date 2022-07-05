import type { News } from "./api"

let liveNewsItems: Array<News> = []
let liveNewsListener: ReturnType<typeof setInterval>

function startLiveNewsListener(callback: (newsItems: Array<News>) => any) {
  console.log("** live news listener started **")
  liveNewsListener = setInterval(() => {
    // initial listener request returns 3 news items
    if (liveNewsItems.length === 0) {
      liveNewsItems.push(
        {
          id: "newsItem-1",
          headline: `Headline 1`,
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at",
        },
        {
          id: "newsItem-2",
          headline: `Headline 2`,
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at",
        }
      )
    }

    // add an additional news item each request
    const thisNewsItemNumber = liveNewsItems.length + 1
    liveNewsItems.push({
      id: `newsItem-${thisNewsItemNumber}`,
      headline: `Headline ${thisNewsItemNumber}`,
      content:
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at",
    })
    console.log("** live news listener response **", {
      liveNewsItems,
    })
    callback(liveNewsItems)
  }, 5000)
}

function stopLiveNewsListener() {
  console.log("** live news listener stopped **")
  clearInterval(liveNewsListener)
}

export default {
  startLiveNewsListener,
  stopLiveNewsListener,
}

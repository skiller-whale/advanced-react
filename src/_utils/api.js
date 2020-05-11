let newsItemNumber = 0

// NOTE this generates new content on each request
function todaysNews() {
  return new Promise((resolve) => {
    // use set timeout to emulate a delay in the api response
    setTimeout(() => {
      const generatedNewsItems = []
      let i = 0
      while (i < 3) {
        i += 1
        newsItemNumber += 1
        generatedNewsItems.push({
          id: `news-items-${newsItemNumber}`,
          headline: `Headline ${newsItemNumber}`,
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at",
        })
      }
      resolve(generatedNewsItems)
    }, 1500)
  })
}

// NOTE this returns a fixed set of data
const fixedNewsItems = []
let i = 0
while (i < 18) {
  i += 1
  fixedNewsItems.push({
    id: `news-items-${i}`,
    headline: `Headline ${i}`,
    content:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at",
  })
}
function latestNews() {
  return new Promise((resolve) => {
    // use set timeout to emulate a delay in the api response
    setTimeout(() => {
      resolve(fixedNewsItems)
    }, 1500)
  })
}

export default { todaysNews, latestNews }

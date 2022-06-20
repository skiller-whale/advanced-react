import React from "react"

import api, { News } from "../_utils/api"
import apiListener from "../_utils/apiListener"

import NewsItem from "./NewsItem"

const newsItems: Array<News> = [
  {
    id: "newsItem-1",
    headline: "Vestibulum hendrerit mollis tincidunt.",
    content:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at",
  },
  {
    id: "newsItem-2",
    headline: "Vestibulum hendrerit mollis tincidunt.",
    content:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at",
  },
  {
    id: "newsItem-3",
    headline: "Vestibulum hendrerit mollis tincidunt.",
    content:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at",
  },
]

type State = {
  favourites: Record<string, News>
}

class NewsFeed extends React.Component<{}, State> {
  toggleFavourite(item: News) {
    if (!this.state.favourites[item.id]) {
      this.setState((state) => ({
        ...state,
        favourites: {
          ...state.favourites,
          [item.id]: item,
        },
      }))
    } else {
      this.setState((state) => {
        const { [item.id]: itemToRemove, ...remainingFavourites } =
          this.state.favourites
        return {
          ...state,
          favourites: remainingFavourites,
        }
      })
    }
  }

  render() {
    // This will need to be replaced with a value from state at some point.
    const favourites = {}

    return (
      <div>
        {newsItems.map((item) => (
          <NewsItem
            key={item.id}
            {...item}
            isFavourite={favourites[item.id]}
            onToggleFavourite={() => {
              this.toggleFavourite(item)
            }}
          />
        ))}
      </div>
    )
  }
}

export default NewsFeed

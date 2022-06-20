import { useState, useEffect } from "react"

import api from "../../_utils/api"
import analytics from "../../_utils/analytics"

import NewsItem from "./NewsItem"

export default function NewsFeed() {
  const loading = false
  const newsItems = [
    {
      id: "news-1,",
      headline: "Headline 1",
      content:
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at",
    },
    {
      id: "news-2",
      headline: "Headline 2",
      content:
        "Tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
    },
  ]

  function loadData() {
    // TODO: Update newsItems here
  }

  function onDismissAll() {
    // TODO: Update newsItems here
  }

  function removeNewsItem(itemToRemove) {
    const newsItemsToKeep = newsItems.filter((item) => item !== itemToRemove)
    // TODO: Update newsItems here
  }

  return (
    <div>
      {newsItems.map((item) => (
        <NewsItem
          key={item.id}
          onDismiss={() => removeNewsItem(item)}
          {...item}
        />
      ))}
      {loading && <span>Loading...</span>}
      {!loading && (
        <div>
          <button type="button" className="btn btn-primary" onClick={loadData}>
            Load {newsItems.length > 1 ? "More" : "Data"}
          </button>
          {newsItems.length > 1 && (
            <button
              type="button"
              className="btn btn-danger ml-5"
              onClick={onDismissAll}
            >
              Dismiss All
            </button>
          )}
        </div>
      )}
    </div>
  )
}

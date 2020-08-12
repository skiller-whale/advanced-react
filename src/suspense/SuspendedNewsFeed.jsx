import React from "react"

import { fetchTodaysNews } from "../_utils/suspenseApi"

import NewsItem from "./NewsItem"

const resource = fetchTodaysNews()

class SuspendedNewsFeed extends React.Component {
  // NOTE: refetch on mount has not been implemented for this demo component

  render() {
    const newsItems = resource.read()
    return (
      <div>
        {newsItems.map((item) => (
          <NewsItem key={item.id} {...item} />
        ))}
      </div>
    )
  }
}

export default SuspendedNewsFeed

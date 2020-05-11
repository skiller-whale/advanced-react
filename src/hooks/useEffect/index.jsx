import React from "react"

import NewsFeed from "./NewsFeed"

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>News</h1>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <NewsFeed />
        </div>
      </div>
    </div>
  )
}

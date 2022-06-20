import { useState } from "react"

import NewsFeed from "./NewsFeed"
import Tab from "./Tab"

export default function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const tabs = [
    {
      name: "Latest News",
      content: () => <NewsFeed />,
    },
    {
      name: "Top Stories",
      content: () => <div>Top Stories Page</div>,
    },
    {
      name: "Gossip",
      content: () => <div>Gossip Page</div>,
    },
  ]

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand mr-5" href="#">
          THE NEWS
        </a>
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {tabs.map((tab, index) => {
              const active = activeTabIndex === index ? "active" : ""
              return (
                <li key={index} className={`nav-item ${active}`}>
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setActiveTabIndex(index)
                    }}
                  >
                    {tab.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
      <div className="pt-4 pl-4">
        {tabs.map((tab, index) => {
          if (activeTabIndex === index) {
            return <Tab key={index} content={tab.content} />
          }
          return null
        })}
      </div>
    </div>
  )
}

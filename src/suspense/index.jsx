import React from "react"
import LoadingSpinner from "./LoadingSpinner"
import TopStory from "./TopStory"
import NewsFeed from "./NewsFeed"
import Gossip from "./Gossip"

const tabs = [
  {
    name: "Latest News",
    content: () => <NewsFeed />,
  },
  {
    name: "Top Story",
    content: () => {
      return <TopStory />
    },
  },
  {
    name: "Gossip",
    content: () => {
      return <Gossip />
    },
  },
]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabIndex: 0,
    }
    this.setActiveTabIndex = this.setActiveTabIndex.bind(this)
  }
  setActiveTabIndex(activeTabIndex) {
    this.setState({
      activeTabIndex,
    })
  }
  render() {
    const { setActiveTabIndex } = this
    const { activeTabIndex, newsItems } = this.state
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand mr-5"
            href="#"
            onClick={() => {
              setActiveTabIndex(0)
            }}
          >
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
        <div className="pt-4 p-4">
          {/* RENDERED TAB CONTENT */}
          {tabs.map((tab, index) => {
            if (activeTabIndex === index) {
              return <div key={index}>{tab.content()}</div>
            }
            return null
          })}
        </div>
      </div>
    )
  }
}
export default App

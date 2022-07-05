import { useCallback, useState, useRef } from "react"
import { getScore } from "./api"
import ScrollableContainer from "./ScrollableContainer"
import ScoreRow from "./ScoreRow"
import SearchBar from "./SearchBar"

const App = () => {
  const [scores, setScores] = useState(
    getScore(10).sort(({ score: a }, { score: b }) => b - a)
  )
  const loadMore = () => {
    setScores((scores) =>
      [...scores, ...getScore()].sort(({ score: a }, { score: b }) => b - a)
    )
  }
  const [scrollToNewScore, setScrollToNewScore] = useState(false)
  const scrollIntoView = (element) => {
    if (element && scrollToNewScore) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Leaderboard
        </a>
        <div>
          <SearchBar />
        </div>
      </nav>
      <main>
        <ScrollableContainer>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="sticky-top bg-secondary">
                  #
                </th>
                <th scope="col" className="sticky-top bg-secondary">
                  Name
                </th>
                <th scope="col" className="sticky-top bg-secondary">
                  Score
                </th>
                <th scope="col" className="sticky-top bg-secondary">
                  Change
                </th>
              </tr>
            </thead>
            <tbody>
              {scores.map(({ name, score }, i) => (
                <tr key={name}>
                  <th scope="row">{i + 1}</th>
                  <td>{name}</td>
                  <td>{score}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollableContainer>
        <button className="btn btn-primary m-3" onClick={loadMore}>
          Load More
        </button>
        <div className="d-inline-block mx-3">
          <input
            id="scrollNew"
            className="form-check-input"
            type="checkbox"
            checked={scrollToNewScore}
            onChange={(event) => setScrollToNewScore(event.target.checked)}
          />
          <label htmlFor="scrollNew" className="form-check-label">
            Scroll newest score into view
          </label>
        </div>
        <button className="btn btn-primary m-3">Scroll to top</button>
      </main>
    </>
  )
}
export default App

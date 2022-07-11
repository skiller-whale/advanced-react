import React, { lazy, MouseEvent, Suspense, useState } from "react"
import type { FC } from "react"

import LoadingSpinner from "./LoadingSpinner"
import Mascot from "./Mascot"
import SmallPrint from "./SmallPrint"
// import PromotionContainer from "./PromotionContainer"

const App: FC = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [acceptedTC, setAcceptedTC] = useState(false)
  const [openedTC, setOpenedTC] = useState(false)

  const onSubmit = () => {}
  const onClickDetails = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setOpenedTC((prevState) => !prevState)
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Skiller Whale Preview
        </a>
      </nav>
      <main className="container mt-3">
        <div className="row">
          <form className="col-8">
            <div className="form-group">
              <label>
                First Name:
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Last Name:
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check"
                    checked={acceptedTC}
                    onChange={(event) => setAcceptedTC(event.target.checked)}
                  />
                  Accept Terms and Conditions
                </label>
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary"
                onSubmit={onSubmit}
              >
                Submit
              </button>
            </div>
            <div className="no-gutters">
              <details
                open={openedTC}
                className="card text-white bg-secondary mt-3"
              >
                <summary onClick={onClickDetails} className="card-header">
                  Read terms and conditions
                </summary>
                <div className="border border-white card-body m-3">
                  <Mascot />
                  <SmallPrint />
                </div>
              </details>
            </div>
          </form>
          {/*<PromotionContainer />*/}
        </div>
      </main>
    </>
  )
}

export default App

import React, { useState } from "react"

import api from "./api"

import DrivingAssessment from "./DrivingAssessment"
import DrivingHistory from "./DrivingHistory"

const tabs = [
  {
    name: "Assessment",
    content: ({ trips, viewTrips }) => (
      <DrivingAssessment trips={trips} viewTrips={viewTrips} />
    ),
  },
  {
    name: "Trips",
    content: ({ trips, confirmTrip }) => (
      <DrivingHistory trips={trips} confirmTrip={confirmTrip} />
    ),
  },
]

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingTrips: true,
      trips: [],
      activeTabIndex: 0,
    }
    this.setActiveTabIndex = this.setActiveTabIndex.bind(this)
    this.viewTrips = this.viewTrips.bind(this)
    this.confirmTrip = this.confirmTrip.bind(this)
  }

  componentDidMount() {
    api.getTrips().then(({ trips }) => {
      this.setState({
        loadingTrips: false,
        trips,
      })
    })
  }

  setActiveTabIndex(index) {
    this.setState({
      activeTabIndex: index,
    })
  }

  viewTrips() {
    this.setState({
      activeTabIndex: 1,
    })
  }

  confirmTrip(tripId) {
    this.setState((state) => {
      const updatedTrips = state.trips.map((trip) => {
        if (trip.id === tripId) {
          return {
            ...trip,
            confirmed: true,
          }
        }
        return trip
      })
      return {
        ...state,
        trips: updatedTrips,
      }
    })
  }

  render() {
    const { activeTabIndex, loadingTrips, trips } = this.state
    const { setActiveTabIndex, viewTrips, confirmTrip } = this
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
            Drive Safe
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
        <div className="p-4">
          {!!loadingTrips && <div>Loading...</div>}
          {!loadingTrips &&
            tabs.map((tab, index) => {
              if (activeTabIndex === index) {
                return (
                  <div key={index}>
                    {tab.content({ trips, viewTrips, confirmTrip })}
                  </div>
                )
              }
              return null
            })}
        </div>
      </div>
    )
  }
}

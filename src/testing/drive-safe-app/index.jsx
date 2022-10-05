import { useEffect, useState } from "react"
import * as api from "./api"
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

const App = () => {
  const [loadingTrips, setLoadingTrips] = useState(true)
  const [trips, setTrips] = useState([])
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const loadTrips = async () => {
    const { trips } = await api.getTrips()
    setLoadingTrips(false)
    setTrips(trips)
  }

  useEffect(() => {
    loadTrips()
  }, [])

  const viewTrips = () => {
    setActiveTabIndex(1)
  }

  const confirmTrip = (tripId) => {
    setTrips((trips) =>
      trips.map((trip) =>
        trip.id === tripId ? { ...trip, confirmed: true } : trip
      )
    )
  }

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
          tabs.map((tab, index) =>
            activeTabIndex === index ? (
              <div key={index}>
                {tab.content({ trips, viewTrips, confirmTrip })}
              </div>
            ) : null
          )}
      </div>
    </div>
  )
}

export default App

import { type FC } from "react"
import { calculateDrivingLevel, calculateDrivingScore } from "../calculations"
import { drivingLevelDisplay } from "../constants"
import { type Trip } from "../api"

type TripRowProps = {
  tripNumber: number
  trip: Trip
  onConfirmTrip: () => void
}

const TripRow: FC<TripRowProps> = ({ tripNumber, trip, onConfirmTrip }) => {
  const { date, distance, incidents, confirmed } = trip
  const drivingScore = calculateDrivingScore({ distance, incidents })
  const drivingLevel = calculateDrivingLevel({ drivingScore })
  const { color } = drivingLevelDisplay[drivingLevel]

  const newStyle = true // toggle this when instructed
  const rowStyle = { background: color }
  const tripNumberStyle = {
    background: color,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  }

  return (
    <tr data-testid="trip-row" style={newStyle ? rowStyle : {}}>
      <td>
        <div style={newStyle ? {} : tripNumberStyle}>{tripNumber}</div>
      </td>
      <td>{date}</td>
      <td>{distance}</td>
      <td>{incidents}</td>
      <td>{drivingScore}</td>
      <td>
        {confirmed ? (
          "Confirmed"
        ) : (
          <button
            type="button"
            className="btn btn-dark btn-sm"
            onClick={onConfirmTrip}
          >
            Confirm Trip
          </button>
        )}
      </td>
    </tr>
  )
}

type DrivingHistoryProps = {
  trips: Trip[]
  confirmTrip: (tripId: string) => void
}

const DrivingHistory: FC<DrivingHistoryProps> = ({ trips, confirmTrip }) => {
  return (
    <div style={{ maxWidth: 900 }}>
      <h2 className="mb-4">Your Trips</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Distance (miles)</th>
            <th>Incidents</th>
            <th>Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => (
            <TripRow
              key={trip.id}
              trip={trip}
              tripNumber={index + 1}
              onConfirmTrip={() => {
                confirmTrip(trip.id)
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DrivingHistory

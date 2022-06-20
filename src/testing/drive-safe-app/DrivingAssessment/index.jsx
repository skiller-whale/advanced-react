import { drivingLevelDisplay } from "../constants"
import { calculateDrivingAssessment } from "../calculations"

export default function DrivingAssessment({ trips, viewTrips }) {
  const {
    drivingScore,
    drivingLevel,
    tripsCount,
    incidentsCount,
    totalDistance,
  } = calculateDrivingAssessment({ trips })
  const { title, summary, color } = drivingLevelDisplay[drivingLevel] || {}
  return (
    <div style={{ maxWidth: 600 }}>
      <h2 className="mb-4">
        Overall Driving Assessment: <span style={{ color }}>{title}</span>
      </h2>
      <div>
        Total Trips:{" "}
        <a data-testid="trip-count" href="#" onClick={viewTrips}>
          {tripsCount}
        </a>
      </div>
      <div>Total Distance: {totalDistance} miles</div>
      <div>No. of Incidents: {incidentsCount}</div>
      <h5 className="mt-4">Score: {drivingScore}</h5>
      <div className="progress mt-4">
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${drivingScore}%`,
            background: color,
          }}
        ></div>
      </div>
      <h4 className="mt-4">{summary}</h4>
    </div>
  )
}

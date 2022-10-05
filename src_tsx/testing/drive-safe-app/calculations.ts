import {
  type DrivingLevel,
  DRIVING_LEVEL_VERY_SAFE,
  DRIVING_LEVEL_SAFE,
  DRIVING_LEVEL_UNSAFE,
  DRIVING_LEVEL_DANGEROUS,
} from "./constants"
import { type Trip } from "./api"

export const calculateDrivingLevel = ({
  drivingScore,
}: {
  drivingScore: number
}): DrivingLevel => {
  if (drivingScore > 90) {
    return DRIVING_LEVEL_VERY_SAFE
  } else if (drivingScore >= 70) {
    return DRIVING_LEVEL_SAFE
  } else if (drivingScore >= 30) {
    return DRIVING_LEVEL_UNSAFE
  }
  return DRIVING_LEVEL_DANGEROUS
}

export const calculateDrivingScore = ({
  distance,
  incidents,
}: {
  distance: number
  incidents: number
}): number => {
  const incidentsPerMile = incidents / distance
  if (incidentsPerMile > 1) {
    return 0
  }
  return Math.round(100 - 100 * incidentsPerMile)
}

export type DrivingAssessment = {
  drivingScore: number
  drivingLevel: DrivingLevel
  tripsCount: number
  incidentsCount: number
  totalDistance: number
}

export const calculateDrivingAssessment = ({
  trips,
}: {
  trips: Trip[]
}): DrivingAssessment => {
  let tripsCount = 0
  let incidentsCount = 0
  let totalDistance = 0
  trips.forEach((trip) => {
    tripsCount += 1
    incidentsCount += trip.incidents
    totalDistance += trip.distance
  })
  const drivingScore = calculateDrivingScore({
    distance: totalDistance,
    incidents: incidentsCount,
  })
  return {
    drivingScore,
    drivingLevel: calculateDrivingLevel({ drivingScore }),
    tripsCount,
    incidentsCount,
    totalDistance,
  }
}

import {
  DRIVING_LEVEL_VERY_SAFE,
  DRIVING_LEVEL_SAFE,
  DRIVING_LEVEL_UNSAFE,
  DRIVING_LEVEL_DANGEROUS,
} from "./constants"
import {
  calculateDrivingLevel,
  calculateDrivingScore,
  calculateDrivingAssessment,
} from "./calculations"

describe("calculateDrivingScore", () => {
  test("distance 100 incidents 0 -> driving score 100", () => {
    const output = calculateDrivingScore({ distance: 100, incidents: 0 })
    expect(output).toBe(100)
  })
  test("distance 100 incidents 50 -> driving score 50", () => {
    const output = calculateDrivingScore({ distance: 100, incidents: 50 })
    expect(output).toBe(50)
  })
  test("distance 100 incidents 100 -> driving score 0", () => {
    const output = calculateDrivingScore({ distance: 100, incidents: 100 })
    expect(output).toBe(0)
  })
  test("distance 100 incidents 101 -> driving score 0", () => {
    const output = calculateDrivingScore({ distance: 100, incidents: 101 })
    expect(output).toBe(0)
  })
})

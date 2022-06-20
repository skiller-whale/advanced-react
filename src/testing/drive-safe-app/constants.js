export const DRIVING_LEVEL_VERY_SAFE = "DRIVING_LEVEL_VERY_SAFE"
export const DRIVING_LEVEL_SAFE = "DRIVING_LEVEL_SAFE"
export const DRIVING_LEVEL_UNSAFE = "DRIVING_LEVEL_UNSAFE"
export const DRIVING_LEVEL_DANGEROUS = "DRIVING_LEVEL_DANGEROUS"
export const drivingLevelDisplay = {
  [DRIVING_LEVEL_VERY_SAFE]: {
    title: "Very Safe",
    summary: "Your driving behaviour is very safe, keep up the good work!",
    color: "#14ff14",
  },
  [DRIVING_LEVEL_SAFE]: {
    title: "Safe",
    summary:
      "Your driving behaviour is safe, but there's still room for improvement",
    color: "#2ee6f1",
  },
  [DRIVING_LEVEL_UNSAFE]: {
    title: "UnSafe",
    summary:
      "Your driving behaviour is considered unsafe, pay more attention to driving safely to improve your score",
    color: "#ffa32c",
  },
  [DRIVING_LEVEL_DANGEROUS]: {
    title: "Dangerous",
    summary:
      "Your driving behaviour is dangerous, urgent action is required to remedy this!",
    color: "#ff4747",
  },
}

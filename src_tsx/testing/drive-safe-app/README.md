# Drive Safe App

The `Drive Safe` app monitors users' driving behaviour by recording any incidents such as heavy breaking or sharp cornering that occur on each trip that a user takes.

Each trip is given a score based on the number of incidents that occur per mile and combine to provide an overall assessment for a users driving that can be one of:

- Very Safe
- Safe
- Unsafe
- Dangerous

## Driving Score

Each trip is given a score between 0 and 100. 100 being the best possible score, meaning that no incidents occurred during the trip. 0 is the lowest possible score (for users with one or more "incidents per mile" on a given trip). Scores between 0 and 100 are calculated based on the number of "incidents per mile" for that trip. E.g. an average of 0.5 incidents per mile would result in a score of 50.

## Driving Assessment

The driving assessment for each trip is derived from the score like this:

| Score Range | Assessment | Assessment Colour |
| ----------- | ---------- | ----------------- |
| 90 to 100   | Very Safe  | green             |
| 70 to 89    | Safe       | blue              |
| 30 to 69    | Unsafe     | orange            |
| 0 to 29     | Dangerous  | red               |

import { faker } from "@faker-js/faker"

export type Score = {
  name: string
  score: number
}

export const getScore = (number: number = 1): Array<Score> => {
  const scores = []
  for (let i = 0; i < number; i++) {
    scores.push({
      name: faker.name.findName(),
      score: faker.datatype.number(),
    })
  }
  return scores
}

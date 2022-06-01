import faker from "@faker-js/faker"
export const getScore = (number = 1) => {
  const scores = []
  for (let i = 0; i < number; i++) {
    scores.push({
      name: faker.name.findName(),
      score: faker.datatype.number(),
    })
  }
  return scores
}

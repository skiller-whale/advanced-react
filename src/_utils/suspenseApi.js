import api from "./api"

export function fetchTodaysNews() {
  return suspenseWrapper(api.todaysNews(4000))
}
// apply the suspense API contract to promise
function suspenseWrapper(promise) {
  let status = "pending"
  let result
  let suspender = promise.then(
    (r) => {
      status = "success"
      result = r
    },
    (e) => {
      status = "error"
      result = e
    }
  )
  return {
    read() {
      if (status === "pending") {
        throw suspender
      } else if (status === "error") {
        throw result
      } else if (status === "success") {
        return result
      }
    },
  }
}

function newsItemSeen(newsItemId) {
  console.log(`analytics: newsItemSeen`, { newsItemId })
}

function newsItemRemoved(newsItemId) {
  console.log(`analytics: newsItemRemoved`, { newsItemId })
}

function moreThanTenItemsShown() {
  console.log(`analytics: moreThanTenItemsShown`)
}

function newsItemSeenFromSource(newsSourceId, newsItemId) {
  console.log(`analytics: newsItemSeenFromSource`, { newsSourceId, newsItemId })
}

function logError(error, info) {
  console.log(`analytics: logError`, { error, info })
}

export default {
  newsItemSeen,
  newsItemRemoved,
  moreThanTenItemsShown,
  newsItemSeenFromSource,
  logError,
}

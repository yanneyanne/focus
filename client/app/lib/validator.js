import requestpromise from 'request-promise'

export function validateWeb(website) {
  return new requestpromise(website)
    .then((html) => {
      return true
    })
    .catch((err) => {
      return false
    })
}

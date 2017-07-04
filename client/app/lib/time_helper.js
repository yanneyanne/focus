
// Takes the time string and returns a new string of the time after one decrement
export function tick(time) {
  let stringArr = time.split(":")
  let seconds = Number(stringArr[stringArr.length - 1])
  let minutes = 0

  if (stringArr.length > 1)
    minutes = Number(stringArr[0])

  if (seconds!=0) {
    seconds-- 
  } else if (seconds===0 && minutes!=0) {
    minutes--
    seconds = 59
  }

  let secondsStr = String(seconds)
  let outputSecs = secondsStr.length < 2 ? "0" + secondsStr : secondsStr
  let outputMins = String(minutes)
  return outputMins + ":" + outputSecs
}

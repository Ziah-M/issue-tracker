export const convertObjectToList = (object) =>
  !object
    ? []
    : Object.keys(object).map((key) => ({
        ...object[key],
        uid: key,
      }))

export const getTimestamp = () => {
  // returns a timestamp without seconds
  const a = new Date()
  const b = a.toUTCString()
  const pattern = /:\d\d\sGMT/g
  const pattern2 = /\w\w\w,\s/g
  const c = b.replace(pattern, '')
  const d = c.replace(pattern2, '')
  return d
}

export const removeFalseyValuesFromObject = (obj) => {
  const updatedData = {}
  Object.keys(obj).map((key) => {
    if (obj[key]) {
      updatedData[key] = obj[key]
    }
  })
}

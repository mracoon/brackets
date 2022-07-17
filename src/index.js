module.exports = function check(str, bracketsConfig) {
  const bracketsConfigObj = Object.fromEntries(bracketsConfig)
  const strArr = str.split('')
  if (str.length % 2 != 0) {
    return false
  } else {
    let resArr = [strArr[0]]
    for (let i = 1; i < strArr.length; i++) {
      if (strArr[i] !== bracketsConfigObj[resArr[resArr.length - 1]]) {
        resArr.push(strArr[i])
      } else { resArr.pop() }
    }
    return resArr.length === 0
  }
}


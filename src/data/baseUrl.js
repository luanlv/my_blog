let isNode = false
if (typeof process === 'object') {
  if (typeof process.versions === 'object') {
    if (typeof process.versions.node !== 'undefined') {
      isNode = true
    }
  }
}

export default function getBaseUrl () {
  if (isNode) {
    return 'http://localhost:3000/api'
  } else {
    return 'http://vnguy.com/api'
  }
}

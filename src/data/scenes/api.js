import m from 'mithril'

import getBaseUrl from '../baseUrl'

const baseUrl = getBaseUrl()

export function getData (list) {
  let url = '/get'
  return post(url, list)
}

// function get (url) {
//   return m.request({
//     url: baseUrl + url
//   })
// }

function post (url, data) {
  let method = 'POST'
  url = baseUrl + url
  return m.request({
    method,
    url,
    data
  })
}

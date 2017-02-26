import m from 'mithril'

import getBaseUrl from '../baseUrl'

const baseUrl = getBaseUrl()

export function getData (list) {
  let url = '/get?v=' + list.join(',')
  return get(url)
}

function get (url) {
  return m.request({
    url: baseUrl + url
  })
}

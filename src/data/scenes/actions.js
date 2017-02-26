// import * as types from '../actionTypes'
// import * as api from './api'
// import {store} from '../../store'
// // import {throwRequest} from '../requests/actions'
//
// export function boundGetHome () { return store.dispatch(loadHome()) }
//
// export function loadHomeSuccess (data) {
//   return { type: types.LOAD_HOME_SUCCESS, data }
// }
//
// export function loadHome () {
//   return function (dispatch) {
//     // dispatch(beginRequest())
//     return api.getData()
//       .then(home => {
//         dispatch(loadHomeSuccess(home))
//       })
//       .catch(e => {
//         // dispatch(throwRequest())
//         throw Error(e)
//       })
//   }
// }

import { all, call } from 'redux-saga/effects'

import { bitcoinSagas } from './bitcoin/bitcoin.sagas'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  yield all([call(bitcoinSagas)])
}

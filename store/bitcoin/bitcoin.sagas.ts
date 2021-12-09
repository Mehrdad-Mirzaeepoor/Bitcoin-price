import { SagaIterator } from 'redux-saga'
import { takeLatest, call, put, all, delay } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import { bitcoinActionTypes } from './bitcoin.actionTypes'
import { BitcoinPriceResponse, httpService } from 'services/http'
import { requestBitcoinFailure, requestBitcoinSuccess } from './bitcoin.actions'

const requestBitcoinPriceWorker = function* (): SagaIterator {
  while (true) {
    try {
      const {
        data: {
          data: { amount },
        },
      }: AxiosResponse<BitcoinPriceResponse> = yield call(() =>
        httpService.get<BitcoinPriceResponse>('')
      )

      yield put(requestBitcoinSuccess(parseInt(amount)))
      yield delay(2000)
    } catch (error) {
      yield put(requestBitcoinFailure(error.message))
    }
  }
}

const requestBitcoinPriceWatcher = function* (): SagaIterator {
  yield takeLatest(bitcoinActionTypes.REQUEST_PRICE, requestBitcoinPriceWorker)
}
export const bitcoinSagas = function* (): SagaIterator {
  yield all([call(requestBitcoinPriceWatcher)])
}

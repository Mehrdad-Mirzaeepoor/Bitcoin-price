import { bitcoinActionTypes } from './bitcoin.actionTypes'
import {
  RequestPriceAction,
  RequestSuccessAction,
  RequestFailureAction,
} from './bitcoin.types'

export const requestBitcoinPrice = (): RequestPriceAction => ({
  type: bitcoinActionTypes.REQUEST_PRICE,
})

export const requestBitcoinSuccess = (price: number): RequestSuccessAction => ({
  type: bitcoinActionTypes.REQUEST_SUCCESS,
  payload: { price },
})

export const requestBitcoinFailure = (error: string): RequestFailureAction => ({
  type: bitcoinActionTypes.REQUEST_FAILURE,
  payload: { error },
})

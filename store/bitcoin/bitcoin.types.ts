import { bitcoinActionTypes } from './bitcoin.actionTypes'

export interface BitcoinState {
  price: number
  error: string
}

export interface RequestPriceAction {
  type: bitcoinActionTypes.REQUEST_PRICE
}

export interface RequestSuccessAction {
  type: bitcoinActionTypes.REQUEST_SUCCESS
  payload: { price: number }
}

export interface RequestFailureAction {
  type: bitcoinActionTypes.REQUEST_FAILURE
  payload: { error: string }
}

export type BitcoinActions = RequestSuccessAction | RequestFailureAction

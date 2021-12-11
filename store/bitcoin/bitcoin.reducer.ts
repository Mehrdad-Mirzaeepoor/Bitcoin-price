import produce from 'immer'
import { HYDRATE } from 'next-redux-wrapper'
import { RootState } from 'store'

import { bitcoinActionTypes } from './bitcoin.actionTypes'
import { BitcoinState, BitcoinActions } from './bitcoin.types'

const initialState: BitcoinState = {
  price: 0,
  error: '',
}

export const bitcoinReducer = (
  state = initialState,
  action: BitcoinActions
): BitcoinState =>
  produce(state, (draft) => {
    switch (action.type) {
      case HYDRATE as any: {
        const {
          bitcoin: { price, error },
        } = action.payload as any as RootState
        draft.error = error
        draft.price = price
        break
      }

      case bitcoinActionTypes.REQUEST_SUCCESS: {
        if (state.error) state.error = ''
        draft.price = action.payload.price
        break
      }

      case bitcoinActionTypes.REQUEST_FAILURE: {
        draft.error = action.payload.error
        break
      }

      default:
        return draft
    }
  })

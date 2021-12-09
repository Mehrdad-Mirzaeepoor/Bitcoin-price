import { combineReducers } from 'redux'

import { bitcoinReducer } from './bitcoin/bitcoin.reducer'

const rootReducer = combineReducers({
  bitcoin: bitcoinReducer,
})

export default rootReducer

import { createStore, applyMiddleware, Middleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { BitcoinState } from './bitcoin/bitcoin.types'

export interface RootState {
  bitcoin: BitcoinState
}

const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
const makeStore = () => store
export const wrapper = createWrapper(makeStore)

sagaMiddleware.run(rootSaga)

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RootState } from '..'

export const selectBitcoinPrice = (state: RootState) => state.bitcoin.price

export const selectBitcoinError = (state: RootState) => state.bitcoin.error

import axios from 'axios'

export const httpService = axios.create({
  baseURL: 'https://api.coinbase.com/v2/prices/spot?currency=USD',
  timeout: 5000,
})

export interface BitcoinPriceResponse {
  data: {
    base: string
    currency: string
    amount: string
  }
}

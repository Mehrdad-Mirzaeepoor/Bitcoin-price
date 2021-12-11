import Head from 'next/head'

import { Bitcoin } from 'components'
import {
  requestBitcoinFailure,
  requestBitcoinSuccess,
} from 'store/bitcoin/bitcoin.actions'
import { httpService } from 'services'
import { BitcoinPriceResponse } from 'services/http'
import { wrapper } from 'store'

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Bitcoin price</title>
      </Head>

      <main className="h-full flex flex-row justify-center items-center">
        <div>Current Price is : </div>
        <Bitcoin />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      const {
        data: {
          data: { amount },
        },
      } = await httpService.get<BitcoinPriceResponse>('')
      store.dispatch(requestBitcoinSuccess(parseInt(amount)))
    } catch (error) {
      store.dispatch(requestBitcoinFailure(error.message))
    }

    return { props: {} }
  }
)

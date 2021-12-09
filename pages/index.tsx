import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { Bitcoin } from 'components'
import { BitcoinPriceResponse, httpService } from 'services/http'

interface Props {
  initialPrice: number
}

const Home: React.FC<Props> = ({ initialPrice }) => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Bitcoin price</title>
      </Head>

      <main className="h-full flex flex-row justify-center items-center">
        <div>Current Price is : </div>
        <Bitcoin initialPrice={initialPrice} />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: {
      data: { amount },
    },
  } = await httpService.get<BitcoinPriceResponse>('')
  return {
    props: {
      initialPrice: parseInt(amount),
    },
  }
}

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { requestBitcoinPrice } from 'store/bitcoin/bitcoin.actions'
import { selectBitcoinPrice } from 'store/bitcoin/bitcoin.selector'

interface Props {
  initialPrice: number
}

export const Bitcoin: React.FC<Props> = ({ initialPrice }) => {
  const dispatch = useDispatch()
  const price = useSelector(selectBitcoinPrice)

  useEffect(() => {
    const timer = setTimeout(() => dispatch(requestBitcoinPrice()), 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <div className="font-bold">
      &nbsp;$
      {(typeof window !== 'undefined' && price) || initialPrice}
    </div>
  )
}

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { requestBitcoinPrice } from 'store/bitcoin/bitcoin.actions'
import { selectBitcoinPrice } from 'store/bitcoin/bitcoin.selector'

export const Bitcoin: React.FC = () => {
  const dispatch = useDispatch()
  const price = useSelector(selectBitcoinPrice)

  useEffect(() => {
    const timer = setTimeout(() => dispatch(requestBitcoinPrice()), 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return <div className="font-bold">&nbsp;{`$ ${price.toLocaleString()}`}</div>
}

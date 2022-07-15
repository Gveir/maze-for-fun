import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as R from 'ramda'
import { move } from '../features/movement/movementSlice'

export default (keys) => {
  const dispatch = useDispatch()
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  })

  const detectKeyDown = ({ key }) => {
    if (R.isNil(keys) || R.includes(key, keys)) {
      dispatch(move({ key }))
    }
  }
}

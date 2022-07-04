import { useDispatch, useSelector } from 'react-redux'
import { changeMazeSize } from '../../features/settings/settingsSlice'

export default () => {
  const mazeSize = useSelector((state) => state.settings.mazeSize)
  const dispatch = useDispatch()

  return <MazeSize value={mazeSize} onChange={(e) => dispatch(changeMazeSize(parseInt(e.target.value)))} />
}

export const MazeSize = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor='maze-size' className='block mb-2 text-base text-gray-800'>Wielkość labiryntu</label>
      <input
        id='maze-size'
        type='range'
        min='1'
        max='3'
        value={value}
        className='w-full h-2 bg-green-700 rounded-lg appearance-none cursor-pointer'
        onChange={onChange}
      />
    </>
  )
}

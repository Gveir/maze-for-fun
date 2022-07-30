import { useSelector } from 'react-redux'
import * as R from 'ramda'
import styled from 'styled-components'
import PlayerPiece from './PlayerPiece'

const MazeContainer = styled.div`
width: ${({ size }) => `${size.width * 1.5}rem`};
height: ${({ size }) => `${size.height * 1.5}rem`};
`

export default () => {
  const maze = useSelector((state) => state.maze)
  console.log(maze.size)
  const renderCell = (cell, idx) => {
    return (
      <div
        className='w-6 h-6 bg-stone-500 border-2 border-stone-900'
        key={`cell-${idx}`}
        cell={cell}
      />
    )
  }

  return (
    <>
      <MazeContainer className='flex flex-wrap relative' size={maze.size}>
        {R.pipe(R.unnest, R.addIndex(R.map)(renderCell))(maze.cells)}
        <PlayerPiece />
      </MazeContainer>

    </>
  )
}

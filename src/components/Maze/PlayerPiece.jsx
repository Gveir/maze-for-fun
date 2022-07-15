import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Piece = styled.div`
left: ${({ position }) => `${position.x * 24}px`};
top: ${({ position }) => `${position.y * 24}px`};
`

export default () => {
  const position = useSelector((state) => state.movement.position)

  return (
    <PlayerPiece
      position={position}
    />
  )
}

export const PlayerPiece = ({ position }) => {
  return (
    <Piece
      className='w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 shadow-sm shadow-blue-500/50 absolute'
      position={position}
    />
  )
}

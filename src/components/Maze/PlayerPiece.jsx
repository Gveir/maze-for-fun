import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Piece = styled.div`
left: ${({ position }) => `${position.x * 1.5}rem`};
top: ${({ position }) => `${position.y * 1.5}rem`};
transform: rotate(${({ position }) => `${(position.x + position.y) * 30}deg`})
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
      className='w-6 h-6 p-0.5 absolute'
      position={position}
    >
      <div className='w-full h-full rounded-full bg-gradient-to-br from-cyan-500 to-orange-300 shadow-sm shadow-blue-500/50' />
    </Piece>
  )
}

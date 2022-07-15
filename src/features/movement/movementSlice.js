import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  position: {
    x: 0,
    y: 0
  }
}

export const movementSlice = createSlice({
  name: 'movement',
  initialState,
  reducers: {
    move: (state, action) => {
      switch (action.payload.key) {
        case 'ArrowUp':
          state.position.y -= 1
          break
        case 'ArrowDown':
          state.position.y += 1
          break
        case 'ArrowLeft':
          state.position.x -= 1
          break
        case 'ArrowRight':
          state.position.x += 1
          break
      }
    }
  }
})

export const { move } = movementSlice.actions

export default movementSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  size: { width: 10, height: 10 },
  cells: Array(10).fill(0).map(x => Array(10).fill({ type: 'wall' }))
}

export const mazeSlice = createSlice({
  name: 'maze',
  initialState,
  reducers: {
    setMaze: (state, action) => {
      state = action.payload
    }
  }
})

export const { setMaze } = mazeSlice.actions

export default mazeSlice.reducer

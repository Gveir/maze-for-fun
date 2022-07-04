import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mazeSize: 2
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeMazeSize: (state, action) => {
      state.mazeSize = action.payload
    }
  }
})

export const { changeMazeSize } = settingsSlice.actions

export default settingsSlice.reducer

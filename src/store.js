import { configureStore } from '@reduxjs/toolkit'
import settings from './features/settings/settingsSlice'
import movement from './features/movement/movementSlice'
import maze from './features/maze/mazeSlice'

export const store = configureStore({
  reducer: {
    settings,
    movement,
    maze
  }
})

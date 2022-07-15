import { configureStore } from '@reduxjs/toolkit'
import settings from './features/settings/settingsSlice'
import movement from './features/movement/movementSlice'

export const store = configureStore({
  reducer: {
    settings,
    movement
  }
})

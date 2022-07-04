import { configureStore } from '@reduxjs/toolkit'
import settings from './features/settings/settingsSlice'

export const store = configureStore({
  reducer: {
    settings
  }
})

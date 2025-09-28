import { configureStore, Store } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { jobApi } from './service/jobs'
export const store = configureStore({
    reducer: {
        [jobApi.reducerPath]:jobApi.reducer
    },
   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(jobApi.middleware)
});
setupListeners(store.dispatch)
// Infer the type of makeStore
export type AppStore = ReturnType<typeof store.getState>
// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
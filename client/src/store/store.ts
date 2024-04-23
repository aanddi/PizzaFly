import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'

import basketReducer from '@/store/basket/basket.slice'
import cityReducer from '@/store/city/city.slice'
import stopListReducer from '@/store/stopList/stopList.slice'
import userReducer from '@/store/user/user.slice'

const rootReducer = combineReducers({
  user: userReducer,
  city: cityReducer,
  basket: basketReducer,
  stopList: stopListReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  })
}

const store = setupStore()

export type TypeRootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDuspatch = AppStore['dispatch']

export const persistor = persistStore(store)
export default store

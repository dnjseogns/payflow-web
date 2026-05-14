import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import persistConfig from '@/redux/persist/persistConfig';
import authReducer from '@/redux/slice/authSlice';
import menuReducer from '@/redux/slice/menuSlice';

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedMenuReducer = persistReducer(persistConfig, menuReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    menu: persistedMenuReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
export default store;
import storage from 'redux-persist/lib/storage'; //storage(기본값) : localStorage

const persistConfig = {
  key: 'root', //localStorage저장이름 : persist:root
  storage : storage.default ?? storage,
  whitelist: ['auth'] // auth만 저장
};

export default persistConfig;
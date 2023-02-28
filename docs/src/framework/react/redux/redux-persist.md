# redux-persist

> 持久化存储: redux store

[文档地址](https://github.com/rt2zz/redux-persist)

## 用法

```js
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
```

```js
import { PersistGate } from 'redux-persist/integration/react'

// ... normal setup, create store and persistor, import components etc.

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};
```

## 存储引擎

- **localStorage** `import storage from 'redux-persist/lib/storage'`
- **sessionStorage** `import storageSession from 'redux-persist/lib/storage/session'`
- redux-persist-fs-storage 
- redux-persist-weapp-storage 
- ...

## 黑/白 名单

```js
// BLACKLIST
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['navigation'] // navigation will not be persisted
};

// WHITELIST
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['navigation'] // only navigation will be persisted
};
```

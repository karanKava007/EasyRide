import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { rootReducer } from '../redux/reducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'] // only navigation will be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
}
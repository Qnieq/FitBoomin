import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { planSlice } from "./plan-info/planInfo.slice";
import { planIdSlice } from "./plan-info/ById/planId.slice";
import { reducer as purchaseNowReducer } from "./purchase/purchaseNow.slice";
import { reducer as registrationReducers } from "./registration/register.slice";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
     key: 'root',
     storage: storage,
}

const authPersistConfig = {
     key: 'auth',
     storage: storage,
}

const reducers = combineReducers({
     plan: planSlice.reducer,
     planId: planIdSlice.reducer,
     purchaseNow: purchaseNowReducer,
     register: persistReducer(authPersistConfig ,registrationReducers),
});

const persistedReducer = persistReducer(rootPersistConfig, reducers)


export const store = configureStore({
     reducer: persistedReducer,
})

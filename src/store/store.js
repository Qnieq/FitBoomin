import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { planSlice } from "./plan-info/planInfo.slice";
import { planIdSlice } from "./plan-info/ById/planId.slice";
import { reducer as purchaseNowReducer } from "./purchase/purchaseNow.slice";
import { reducer as registrationReducers } from "./registration/register.slice";
import { reducer as loginReducers } from "./login/login.slice";
import { reducer as forgotPass } from "./forgotPassword/forgotPassword.slice";
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
     register: persistReducer(authPersistConfig, registrationReducers),
     login: loginReducers,
     forgot: forgotPass,
});

const persistedReducer = persistReducer(rootPersistConfig, reducers)


export const store = configureStore({
     reducer: persistedReducer,
})

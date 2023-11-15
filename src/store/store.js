import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { planSlice } from "./plan-info/planInfo.slice";
import { planIdSlice } from "./plan-info/ById/planId.slice";
import { reducer as purchaseNowReducer } from "./purchase/purchaseNow.slice";
import { reducer as registrationReducers } from "./registration/register.slice";


const reducers = combineReducers({
     plan: planSlice.reducer,
     planId: planIdSlice.reducer,
     purchaseNow: purchaseNowReducer,
     register: registrationReducers,
});

export const store = configureStore({
     reducer: reducers,
})
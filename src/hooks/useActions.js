import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as planActions from "../store/plan-info/planInfo.actions";
import * as regActions from "../store/registration/register.actions";
import * as logActions from "../store/login/login.actions";
import * as forgotActions from "../store/forgotPassword/forgotPassword.actions";
import {actions as purchaseActions} from "../store/purchase/purchaseNow.slice";
import {actions as registerActions} from "../store/registration/register.slice";
import {actions as loginActions} from "../store/login/login.slice";
import {actions as forgotPasswordActions} from "../store/forgotPassword/forgotPassword.slice";

const rootActions = {
  ...forgotActions,
  ...logActions,
  ...regActions,
  ...planActions,
  ...purchaseActions,
  ...registerActions,
  ...loginActions,
  ...forgotPasswordActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

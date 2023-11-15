import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as planActions from "../store/plan-info/planInfo.actions";
import {actions as purchaseActions} from "../store/purchase/purchaseNow.slice";
import {actions as registerActions} from "../store/registration/register.slice";

const rootActions = {
  ...planActions,
  ...purchaseActions,
  ...registerActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

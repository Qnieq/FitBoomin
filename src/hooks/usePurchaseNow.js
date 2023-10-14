import { useSelector } from "react-redux";

export const usePurchaseNow = () => {
  const {purchaseNow} = useSelector((state) => state);
  return {purchaseNow} ;
};

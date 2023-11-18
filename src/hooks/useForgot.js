import { useSelector } from "react-redux";

export const useForgot = () => {
  const {forgot} = useSelector((state) => state);
  return {forgot};
};

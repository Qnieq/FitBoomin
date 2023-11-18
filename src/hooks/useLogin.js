import { useSelector } from "react-redux";

export const useLogin = () => {
  const {login} = useSelector((state) => state);
  return {login};
};

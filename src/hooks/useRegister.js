import { useSelector } from "react-redux";

export const useRegister = () => {
  const {register} = useSelector((state) => state);
  return {register};
};

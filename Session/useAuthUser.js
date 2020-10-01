import AuthUserContext from "./context";
import { useContext } from "react";

const useAuthUser = () => {
  const authUser = useContext(AuthUserContext);
  return authUser;
};

export default useAuthUser;

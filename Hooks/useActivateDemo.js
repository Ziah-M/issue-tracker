import { useAuthUser } from "../Session";
import { useEffect } from "react";
import { demoData } from "../Data";

const useActivateDemo = () => {
  const user = useAuthUser();

  useEffect(() => {
    if (user && user.role === "DEMO") {
      const cache = localStorage.getItem("demo-data");

      if (!!cache) {
        localStorage.setItem("demo-data", JSON.stringify(demoData));
      }
    }
  }, [user]);
};

export default useActivateDemo;

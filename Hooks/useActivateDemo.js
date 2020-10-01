import { useAuthUser } from "../Session";
import { demoData } from "../Data";

const useActivateDemo = () => {
  const user = useAuthUser();

  if (user.role === "DEMO") {
    const cache = localStorage.getItem("demo-data");

    if (!!cache) {
      localStorage.setItem("demo-data", JSON.stringify(demoData));
    }
  }
};

export default useActivateDemo;

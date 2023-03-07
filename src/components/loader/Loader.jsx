// CORE
import RingLoader from "react-spinners/RingLoader";
// CUSTOM-HOOKS
import { useThem } from "../../hook/useThem";

export const Loader = () => {
  const { themType } = useThem();

  return (
    <RingLoader
      color={themType ? "lightblue" : "black"}
      size={60}
      speedMultiplier={1}
    />
  );
};

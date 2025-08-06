import { Reuleaux } from "ldrs/react";
import "ldrs/react/Reuleaux.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-spinner">
        <Reuleaux
          size="37"
          stroke="5"
          strokeLength="0.15"
          bgOpacity="0.1"
          speed="1.2"
          color="black"
        />
      </div>
    </div>
  );
}

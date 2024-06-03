import Lottie from "lottie-react";
import world from "../../assets/json/world.json";
import nike from "../../assets/json/nike.json";
import { useState, useEffect } from "react";

const PreLoad = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 18000);
  }, []);

  return (
    <div>
      {loading ? (
        <Lottie
          className="max-w-fit min-h-screen fixed "
          animationData={nike}
          loop={true}
        />
      ) : null}
    </div>
  );
};

export default PreLoad;

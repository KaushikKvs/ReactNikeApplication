import { useEffect, useState } from "react";

const ProgressBarTop = () => {
  const [progress, SetProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      SetProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 800);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-[100%] h-1 bg-[#f2f2f2]">
      {/* Top Progress Bar */}
      <div
        className="h-[100%] bg-coral-red transition-[width+.1] duration-[0.5s] ease-in-out forwards"
        style={{ width: `${progress}%` }}
      ></div>
      {/* Loading Spinner*/}
      <div className="loadingContent">
        <div className="loadingSpinner"></div>
        <div>Loading...</div>
      </div>
      {/* Circular Progress Bar */}
      {/*<div className="circular">
        <div className="circularInner">
          {/* <div className="circularBar">
            <div className="circularLeft">
              <div className="circularLeftProgress"></div>
            </div>
            <div className="circularRight">
              <div className="circularRightProgress"></div>
            </div>
          </div> 
        </div>
      </div>*/}
    </div>
  );
};

export default ProgressBarTop;

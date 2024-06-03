// const LoadingPercent = () => {
//   const scrollProgress = () => {
//     return {
//       init() {
//         window.addEventListener("scroll", () => {
//           let winScroll =
//             document.body.scrollTop || document.documentElement.scrollTop;
//           let height =
//             document.documentElement.scrollHeight -
//             document.documentElement.clientHeight;
//           this.percent = Math.round((winScroll / height) * 100);
//         });
//       },
//       circumference: 30 * 2 * Math.PI,
//       percent: 0,
//     };
//   };

//   return (
//     // <div
//     //   x-data="scrollProgress"
//     //   className="fixed inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
//     // >
//     //   <svg className="w-20 h-20">
//     //     <circle
//     //       className="text-gray-300"
//     //       strokeWidth={"5"}
//     //       stroke="currentColor"
//     //       fill="transparent"
//     //       r="30"
//     //       cx="40"
//     //       cy="40"
//     //     />
//     //     <circle
//     //       className="text-blue-600"
//     //       strokeWidth={"5"}
//     //       strokeDasharray={"circumference"}
//     //       strokeDashoffset={"circumference - (percent / 100) * circumference"}
//     //       strokeLinecap="round"
//     //       stroke="currentColor"
//     //       fill="transparent"
//     //       r="30"
//     //       cx="40"
//     //       cy="40"
//     //     />
//     //   </svg>
//     //   <span
//     //     className="absolute text-xl text-blue-700 text-[`${percent}%`]"
//     //     x-text="`${percent}%`"
//     //   ></span>
//     // </div>
//   );
// };

// export default LoadingPercent;
// const cleanPercentage = (percentage) => {
//   const tooLow = !Number.isFinite(+percentage) || percentage < 0;
//   const tooHigh = percentage > 100;
//   return tooLow ? 0 : tooHigh ? 100 : +percentage;
// };

// const Circle = ({ colour, pct }) => {
//   const r = 70;
//   const circ = 2 * Math.PI * r;
//   const strokePct = ((100 - pct) * circ) / 100;
//   return (
//     <circle
//       r={r}
//       cx={100}
//       cy={100}
//       fill="transparent"
//       stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
//       strokeWidth={"2rem"}
//       strokeDasharray={circ}
//       strokeDashoffset={pct ? strokePct : 0}
//       strokeLinecap="round"
//     ></circle>
//   );
// };

// const Text = ({ percentage }) => {
//   return (
//     <text
//       x="50%"
//       y="50%"
//       dominantBaseline="central"
//       textAnchor="middle"
//       fontSize={"1.5em"}
//     >
//       {percentage.toFixed(0)}%
//     </text>
//   );
// };
// const LoadingPercent = (
//     { percentage, colour }) => {
//   const pct = cleanPercentage(percentage);
//   return (
//     <svg width={200} height={200} className="mt-[50%] ml-[50%] mb-[30%]">
//       <g transform={`rotate(-90 ${"100 100"})`}>
//         <Circle colour="lightgrey" />
//         <Circle colour={colour} pct={pct} />
//       </g>
//       <Text percentage={pct} />
//     </svg>
//   );
// };

const LoadingPercent = () => {
  return (
    <>
      {/* <CircularProgress
        radie={90}
        value={85}
        text-color="#222"
        font-size={20}
        value-valueSuffix="%"
        inActiveStrokeColor="#2ecc71"
      /> */}
    </>
  );
};

export default LoadingPercent;

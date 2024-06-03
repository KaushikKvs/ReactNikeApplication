import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";
import Hamburger from "./components/Hamburger";
import ScrollButton from "./components/ScrollButton";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import PreLoad from "./components/Loading/PreLoad";
import LoadingPercent from "./components/Loading/LoadingPercent";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBarTop from "./components/Loading/ProgressBarTop";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  // const scrollProgress = () => {
  //   return {
  //     init() {
  //       window.addEventListener("scroll", () => {
  //         let winScroll =
  //           document.body.scrollTop || document.documentElement.scrollTop;
  //         let height =
  //           document.documentElement.scrollHeight -
  //           document.documentElement.clientHeight;
  //         this.percent = Math.round((winScroll / height) * 100);
  //       });
  //     },
  //     circumference: 30 * 2 * Math.PI,
  //     percent: 0,
  //   };
  // };

  const percentage = 85;

  return (
    <div className="">
      {loading ? (
        <ProgressBarTop />
      ) : (
        // <ProgressBarTop />
        // <CircularProgressbar
        //   value={percentage}
        //   text={`${percentage}%`}
        //   radius={90}
        //   styles={buildStyles({
        //     // Rotation of path and trail, in number of turns (0-1)
        //     rotation: 0.25,

        //     // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        //     strokeLinecap: "butt",

        //     // Text size
        //     textSize: "16px",

        //     // How long animation takes to go from one percentage to another, in seconds
        //     pathTransitionDuration: 0.5,

        //     // Can specify path transition in more detail, or remove it entirely
        //     // pathTransition: 'none',

        //     // Colors
        //     pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        //     textColor: "#222",
        //     trailColor: "#d6d6d6",
        //     backgroundColor: "#3e98c7",
        //   })}
        // />
        // <PreLoad />
        // <LoadingPercent />
        // <CircularProgress
        //   radie={90}
        //   value={85}
        //   text-color="#222"
        //   font-size={20}
        //   value-valueSuffix="%"
        //   inActiveStrokeColor="#2ecc71"
        // />
        <main className="relative Light-color dark:bg-info">
          {/* <button
          id="toggleDark"
          className="mt-8 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900"
          onClick={() => setToggle(!toggle)}
        >
          Toggle Dark Mode
        </button> */}
          {/* bg-gradient-to-r from-purple-500 to-pink-500 */}
          <Nav />
          {/* <Hamburger /> */}

          <section
            className="xl:padding-l
    wide:padding-r padding-b
   
    "
          >
            <Hero />
          </section>
          <section className="padding">
            <PopularProducts />
          </section>
          <section className="padding">
            <SuperQuality />
          </section>
          <section className="padding-x py-10">
            <Services />
          </section>
          <section className="padding">
            <SpecialOffer />
          </section>
          <section className="padding">
            <CustomerReviews />
          </section>
          <section className="padding-x sm:py-32 w-full">
            <Subscribe />
          </section>
          <section className="padding-x padding-t pb-8">
            <Footer />
          </section>
          <ScrollButton className="pl-10" />
        </main>
      )}
    </div>
  );
};
export default App;
// import React from "react";

// export default function App() {
//   return <div></div>;
// }

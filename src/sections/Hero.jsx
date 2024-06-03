import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigshoeImg, SetBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="Home"
      className="w-full flex 
      xl:flex-row flex-col 
      justify-center min-h-screen
      gap-10 max-container
      dark:text-white      
      relative
     
    "
    >
      <div
        className="relative 
        xl:w-2/5 flex flex-col 
        justify-center items-start
        w-full max-xl:padding-x pt-[150px]
        "
      >
        <p className="text-3xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin 
        text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold"
        >
          <span
            className="
          xl:whitespace-nowrap
          relative z-10 pr-10
          bg-blend-overlay
         "
          >
            The New <span className="text-coral-red">Arrival</span>
          </span>
          <br />
          <span
            className="text-coral-red
          inline-block mt-3 px-[5px]"
          >
            Nike
          </span>
          <span className="dark:text-white">Shoes</span>
        </h1>
        <p
          className="font-montserrat
        text-indigo-950 text-lg
         leading-8 mt-6 mb-14
         sm:max-w-sm
         dark:text-white"
        >
          Discover Stylish Nike arrivals,quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div
          className="flex 
            justify-start items-start
          flex-wrap w-full mt-20 gap-16"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl 
              font-palanquin 
              font-bold"
              >
                {stat.value}
              </p>
              <p
                className="leading-7 
              font-montserrat
              text-indigo-950 "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1
      flex justify-center items-center
      xl:min-h-screen
      max-xl:py-40 bg-primary
      bg-hero bg-cover bg-center"
      >
        <img
          src={bigshoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div
          className="flex sm:gap-6
      gap-4 absolute -bottom-[5%] pl-[10px]
      sm:left-[20%] sm:right-[20%] max-sm:px-6"
        >
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => SetBigShoeImg(shoe)}
                bigShoeImg={bigshoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

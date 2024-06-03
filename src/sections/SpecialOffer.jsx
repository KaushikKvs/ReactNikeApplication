import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap
  items-center max-xl:flex-col-reeverse
  gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          <span className="text-coral-red px-[5px]">Special</span>
          <span className="dark:text-white px-[5px]">Offer</span>
        </h2>
        <p
          className="mt-4 lg:max-w-lg
          text-indigo-950 font-montserrat text-lg leading-7
        dark:text-white"
        >
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p
          className="mt-6 lg:max-w-lg
          text-indigo-950 font-montserrat text-lg leading-7
          dark:text-white"
        >
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. your journey with us is
          nothign short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="black"
            textColor="text-black"
            className="dark:bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

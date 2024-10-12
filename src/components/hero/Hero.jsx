import SecondaryHeading from "../headings/SecondaryHeading";
import PrimaryHeading from "../headings/PrimaryHeading";
import PrimaryButton from "../buttons/PrimaryButton";
import Share from "./Share";

function Hero() {
  return (
    <section className="relative z-[2] mt-[-93px] flex h-[110dvh] items-center bg-[url('./images/hero/bg-hero.jpg')] bg-[-40%] bg-contain px-20 text-center xl:text-left">
      <div className="3xl:before:clip-path-hero 3xl:after:clip-path-hero container relative ml-10 flex h-full items-center justify-end xsm:ml-auto 3xl:before:absolute 3xl:before:bottom-0 3xl:before:right-[270px] 3xl:before:h-[60%] 3xl:before:w-[450px]">
        <div className="relative z-10 grid xl:grid-cols-[1fr,250px]">
          <div className="space-y-5 xl:justify-self-end">
            <SecondaryHeading textColor="black" bgColor="white">
              Find your energy
            </SecondaryHeading>
            

            <PrimaryHeading />

            <PrimaryButton to="/classes">Go To classes</PrimaryButton>
          </div>

          <Share />
        </div>
      </div>
    </section>
  );
}

export default Hero;

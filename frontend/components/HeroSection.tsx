import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative sm:h-screen h-[50vh] w-full overflow-hidden ">
      <Image
        src="/Gemini_Generated_Image_li8acmli8acmli8a.png"
        height={800}
        width={800}
        className=" absolute h-full w-full right-0  object-cover"
        alt="Hero Image"
      />

      <div className="absolute right-0 z-20 bg-radial-[at_90%_60%] from-transparent sm:from-10% from-5% via-[#111518] sm:via-70% via-60% to-[#111518] to-90% h-full w-full  flex items-center justify-center"></div>
      {/* <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#111518]  z-20 h-screen w-full  flex items-center justify-center"></div> */}
      <h1 className="text-2xl m-12 absolute text-background z-30">
        <span className="text-primary text-3xl">V</span>enue{" "}
        <span className="text-primary text-3xl">F</span>inder
      </h1>
      <div className=" absolute m-12 sm:w-1/3 top-1/2 -translate-y-1/2 text-start z-30">
        <h1 className="text-3xl font-bold tracking-tight text-background sm:text-6xl">
          Find Your
          <br /> <span className="text-primary sm:text-8xl ">Perfect</span>{" "}
          <br />
          Event Venue
        </h1>
        <p className="mt-2 text-sm text-background sm:text-2xl ">
          Browse and book top-rated venues across India for your next event.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

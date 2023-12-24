"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import Button from "../Button";
import { twMerge } from "tailwind-merge";
import Image from "next/Image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      className={twMerge(
        "flex flex-col items-center min-h-screen bg-gray-50 w-screen justify-center px-4 py-32"
      )}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full lg:justify-between">
        <div
          className="left flex-column relative md:order-2 md:basis-full"
          data-aos="fade-left"
        >
          <Image
            height={700}
            width={700}
            src="/hero.png"
            alt="responsive mobile design"
            className="hero-mobile-img max-w-[500px] w-full h-auto relative z-10"
          />{" "}
          <Image
            height={300}
            width={300}
            src="/bg-blurb.png"
            alt="website developer designer"
            className="absolute z-0 h-[100%] w-[100%] -z-2 opacity-[0.3]"
          />
        </div>
        <div
          className="right md:order-1 md:basis-full flex flex-col justify-center md:items-start items-center gap-4 md:gap-2"
          data-aos="fade-right"
        >
          <small className="text-xl md:text-sm text-center md:text-left lg:text-2xl lg:font-bold  text-secondary font-handwriting">
            Branding, Marketing & Complete Business Visibility
          </small>

          <p className="font-normal text-center md:text-left text-[40px] md:text-[35px] xl:text-[60px] hero-bold-font leading-tight xl:leading-[70px] capitalize text-darkBlue">
            <span className="flex items-center md:items-start justify-center w-fit gap-2 text-center md:text-left">
              Creative
              <span className="text-secondary block">
                <Typewriter
                  options={{
                    strings: [
                      "Websites",
                      "Logos",
                      "Banners",
                      "Fliers",
                      "Branding",
                    ],
                    cursor: "_",
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
            for your{" "}
            <span className="relative">
              Business
              <div className="absolute bottom-2 left-0 -z-10 h-5 w-full bg-secondary"></div>
            </span>
          </p>
          <p className="text-gray-500 lg:pr-10 text-justify md:text-left text-sm xl:text-base md:px-0">
            Give your business and brand a wider reach with a unique website
            tailored for your target audience. We brand businesses to help them
            reach wider audience while getting the results needed.
          </p>
          <div className="btn flex items-center gap-4 mt-4">
            <Button url={"/#projects"} title={"Projects"} />
            <Button url={"/contact"} title={"Lets Talk"} type="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

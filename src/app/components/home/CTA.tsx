import React from "react";
import Button from "../Button";
import Image from "next/image";

type Props = {};

const CTA = (props: Props) => {
  return (
    <section
      className="relative overflow-hidden mx-4 my-20 py-12 flex-column bg-gradient-to-r from-red-500 to-pink-500 px-4 lg:px-16 rounded-3xl shadow-xl max-w-7xl"
      data-aos="fade-downa"
    >
      <Image
        height={400}
        width={400}
        src="/splash.png"
        alt="website developer designer"
        className="absolute left-0 top-0 opacity-20 h-96 z-0"
      />
      <div className="container grid lg:grid-cols-2 items-center justify-between gap-20 relative z-20">
        <div className="basis-full lg:max-w-[550px] w-full grid gap-2">
          <small className="font-handwriting text-gray-800 text-2xl font-semibold text-center lg:text-left">
            Increased Visibility and Customer Reach
          </small>
          <h2 className="text-2xl hero-bold-font uppercase text-center lg:text-left text-white">
            Get Optimized Visibility and Improved Customer Reach for your brand
            today
          </h2>
          <p className="mb-10 text-gray-100 text-justify">
            Your website should be the number one powerhouse for your business,
            having an amazing combination of professionalism, aesthic appearance
            as well as compelling enough to convince your audience on how much
            they need your services.
          </p>
          <div className="place-self-center lg:place-self-start">
            {" "}
            <Button url={"/"} title={"get started"} />
          </div>
        </div>{" "}
        <div className="relative flex-col justify-center items-center hidden lg:flex">
          <Image
            height={320}
            width={320}
            src="/bg-blurb.png"
            alt="website developer designer"
            className="absolute h-80 w-[100%] -z-2 opacity-40"
          />
          <Image
            height={500}
            width={500}
            src="/cta.png"
            alt="get responsive and fast website for your business and brand"
            className="max-w-[550px] w-full basis-full relative z-10"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default CTA;

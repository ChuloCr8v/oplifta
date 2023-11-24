import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  title: string;
  subtitle: string;
}

const SectionTitle = (props: Props) => {
  return (
    <div
      className="flex flex-col items-center gap-2 relative"
      data-aos="fade-up"
    >
      <div className="flex items-center text-pink-500 text-center">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <Image
        height={160}
        width={300}
        src="/bg-blurb.png"
        alt="website developer designer"
        className="absolute h-40 w-[80%] -z-2 opacity-10"
      />
      <h2 className="text-[30px] text-gray-800 font-bold relative flex flex-col justify-center items-center capitalize">
        {props.title}{" "}
        <div className="absolute bottom-2 -z-10 h-2 w-[80%] bg-pink-500"></div>
      </h2>
      <h2 className="text-gray-500 text-sm text-justify md:text-center max-w-[1000px] w-full normal-case">
        {props.subtitle}
      </h2>
    </div>
  );
};

export default SectionTitle;

import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  subtitle: string;
  tagline: string;
  className?: string;
  background?: boolean;
}

const SectionTitle = (props: Props) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center md:items-start gap-2 relative",
        props.className
      )}
      data-aos="fade-in"
    >
      {props.background && (
        <Image
          height={156}
          width={300}
          src="/bg-blurb.png"
          alt="website developer designer"
          className="absolute h-48 -mt-2 w-[100%] -z-2 opacity-10"
        />
      )}
      <small className="text-2xl font-bold text-pink-500 font-handwriting">
        {props.tagline}
      </small>
      <h2 className="hero-bold-font text-center md:text-left text-[30px] text-gray-800 relative flex flex-col justify-center items-center md:justify-start md:items-start">
        {props.title}{" "}
        <div className="absolute bottom-2 -z-10 h-2 w-[80%] bg-pink-500"></div>
      </h2>
      <h2 className="text-gray-500 normal-case w-full text-justify md:text-left text-sm">
        {props.subtitle}
      </h2>
    </div>
  );
};

export default SectionTitle;

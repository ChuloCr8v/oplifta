"use client";

import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const Stats = (props: Props) => {
  const statsData = [
    {
      title: "Years",
      span: " of experience",
      figure: "+8",
      color: "#ec4899",
    },
    {
      title: "Completed",
      span: " projects",
      figure: "+20",
      color: "#ef4444",
    },
    {
      title: "Satisfied",
      span: "clients",
      figure: "+12",
      color: "#3b82f6",
    },
  ];
  return (
    <section
      className="w-[calc(100%-32px)] lg:w-fit flex flex-col md:flex-row items-center justify-center gap-20 md:gap-10 lg:gap-20 bg-white rounded-lg xl:p-16 md:p-10 p-16 -mt-[50px] mx-4 shadow-md relative overflow-hidden"
      data-aos="fade-up"
    >
      <Image
        height={400}
        width={400}
        src="/bg-blurb.png"
        alt="website developer designer"
        className="absolute md:h-32 h-80 xl:h-56 min-w-[400px] md:w-[80%] -z-2 opacity-20"
      />
      {statsData.map((stat, index) => (
        <div className="relative z-2" key={index} data-aos="zoom-in">
          <div
            className="flex flex-col md:flex-row items-center gap-4 relative z-2"
            key={index}
          >
            <p
              className={twMerge(
                "text-[50px] font-bold",
                stat.figure === "+8"
                  ? `text-pink-500`
                  : stat.figure === "+20"
                  ? "text-red-500"
                  : "text-blue-500"
              )}
            >
              {stat.figure}
            </p>
            <p className="text-lg text-gray-500 font-semibold">
              {stat.title} <span className="">{stat.span}</span>
            </p>
          </div>
          <div
            className={twMerge(
              "h-2 w-full absolute -bottom-3 ",
              stat.figure === "+8"
                ? `bg-pink-500`
                : stat.figure === "+20"
                ? "bg-red-500"
                : "bg-blue-500"
            )}
          ></div>
        </div>
      ))}
    </section>
  );
};

export default Stats;

import Image from "next/image";
import React from "react";
import Button from "./Button";

type Props = {
  tag: string;
  title: string;
  subtitle: string;
  heroImage: string;
};

const PageHero = (props: Props) => {
  return (
    <section className="flex-column justify-center shadow-lg w-full relative z-20 bg-gray-50 py-16 min-h-screen">
      <div className="container max-w-7xl flex flex-col lg:flex-row px-4 lg:px-0 items-center justify-between gap-12">
        <div className="left basis-full" data-aos="fade-right">
          <Image
            src={props.heroImage}
            alt="website developer and designer"
            height={400}
            width={400}
            className="max-w-[700px] w-full pt-12"
          />
        </div>
        <div
          className="right basis-full relative grid gap-4"
          data-aos="fade-left"
        >
          <Image
            height={156}
            width={300}
            src="/bg-blurb.png"
            alt="website developer designer"
            className="absolute h-56 -mt-2 w-[100%] -z-2 opacity-10"
          />
          <p className="tag font-handwriting text-pink-500 text-center lg:text-left text-2xl capitalize">
            {props.tag}
          </p>
          <p className="title hero-bold-font text-[50px] text-center lg:text-left leading-tight capitalize">
            {props.title}
          </p>
          <p className="subtitle text-gray-500 text-base text-justify lg:text-left">
            {props.subtitle}
          </p>{" "}
          <div className="btn flex items-center justify-center lg:justify-start gap-4 mt-6">
            <Button url={"/contact"} title={"Projects"} />
            <Button url={"/contact"} title={"Lets Talk"} type="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;

"use client";

import React, { useEffect } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

type Props = {};

const WhyUs = (props: Props) => {
  const data = [
    {
      icon: "/responsive.png",
      iconBlack: "/responsive-black.png",
      title: "Responsive And Fluid Design",
      content:
        "We create websites that are designed and optimized to work across all devices. This includes mobile phones, tablets, laptops and widescreen computers. This will make your website easily accessible by anyone, no matter what device they are on.",
    },
    {
      icon: "/ui.png",
      iconBlack: "/ui-black.png",
      title: "Clean & Modern UI",
      content:
        "We provide some of the cleanest and elegant user interfaces that are guaranteed to afford your website visitors with a great and unique experience each time. This is defined in our choice of icons, fonts, pictures and other media, so as to ensure aesthetically attractive designs and delivery.",
    },
    {
      icon: "/practices.png",
      iconBlack: "/practices-black.png",
      title: "Best Practices",
      content:
        "We ensure that our deliveries conform with the latest updates and best practices within the website development world. This inlcudes ensuring that your website has a faster load time while being light and easily accessible.",
    },
    {
      icon: "/seo.png",
      iconBlack: "/seo-black.png",
      title: "Website SE0",
      content:
        "Our contents are SEO compliant and will rank your business on Google pages, giving you a wider outreach at the same time, targetting your desired customers.",
    },
  ];
  return (
    <section className="w-screen flex-column py-24 px-4 bg-gray-100">
      <SectionTitle
        title={"Why Us"}
        subtitle={
          "Experience excellence: drive success with data-backed results, unmatched customer satisfaction, and a host of benefits. Here is why you need to partner with us today!"
        }
      />
      <div className="container grid md:grid-cols-2 justify-center gap-6 pt-20">
        {data.map((why, index) => (
          <div
            key={index}
            className="flex-column gap-4 px-4 py-8 lg:p-8 shadow-lg rounded-lg bg-gray-50"
            data-aos="fade-up"
          >
            <div className="relative flex-column justify-center">
              <Image
                height={250}
                width={300}
                src={why.icon}
                alt={why.title}
                className="max-w-[300px] w-full h-[150px] object-contain relative z-10 "
              />
            </div>

            <h2 className="text-center font-bold text-2xl text-gray-800 font-handwriting">
              {why.title}
            </h2>
            <p className="text-gray-500 text-justify text-sm">{why.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;

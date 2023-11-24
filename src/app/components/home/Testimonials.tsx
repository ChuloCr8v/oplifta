"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import SectionTitleLeft from "../SectionTitleLeft";
import Button from "../Button";
import {
  EffectCoverflow,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const Testimonials = (props: Props) => {
  const data = [
    {
      name: "Chioma N",
      testimony:
        "Working with Clever Developer on our law firm's website has been an absolute pleasure. Their commitment to responsive design ensures seamless access on all devices. ",
      role: "Senior Partner, LaChiommy Legal Services.",
    },
    {
      name: "Dave S.",
      testimony:
        "They provided us with a stunning and user-friendly site that perfectly reflects our brand. I wholeheartedly recommend them to any fitness business seeking to establish a strong online presence.",
      role: "Instructor, Fit-Fam Gym.",
    },
    {
      name: "Nathan J.",
      testimony:
        "My blog was nicely designed by clever developers. I recommend their services.",
      role: "Blogger, Gist Realm.",
    },
    {
      name: "Zubby I.",
      testimony:
        "They captured our brand perfectly, creating a sleek, user-friendly, and professional site that exceeded our expectations. ",
      role: "The Smart Wears Shop",
    },
    {
      name: "Amaka N.",
      testimony:
        "Not only did they deliver a visually impressive result, my customer interaction also improved significantly.",
      role: "C.E.O, Macky's Collections.",
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="wrapper grid md:grid-cols-2 gap-12 md:gap-4 items-start  max-w-7xl w-full p-4">
        <SectionTitleLeft
          title={"What our clients are saying"}
          subtitle={
            "We are dedicated to leaving a trail of satisfied clients in our wake and here is how far we have gone."
          }
          tagline={"Testimonials"}
          background
          className="md:pr-20"
        />
        <Swiper
          // install Swiper modules
          modules={[Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-80 w-full"
        >
          {data.map((p, index) => (
            <SwiperSlide
              className=" flex-column gap-1  p-4 text-center duration-300 overflow-hidden relative"
              key={index}
            >
              {/* <img
                    src="/splash.png"
                    alt="website developer designer"
                    className="absolute left-0 top-0 opacity-10 h-60"
                  /> */}

              <Image
                height={160}
                width={160}
                src="/quotes.png"
                alt="website developer designer"
                className="absolute -top-10 right-10 opacity-10 h-40"
              />

              <div className="">
                <p className="text-3xl text-gray-500 font-handwriting relative z-10 text-justify">
                  {p.testimony}
                </p>
                <p className="text-gray-800 text-justify mt-6 font-semibold text-xl">
                  {p.name}
                </p>
                <p className="font-bold text-justify text-sm mt-1 text-pink-500">
                  {p.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

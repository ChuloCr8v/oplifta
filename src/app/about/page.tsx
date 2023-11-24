import React from "react";
import PageHero from "../components/PageHero";
import Image from "next/image";
import Button from "../components/Button";
import SectionTitleLeft from "../components/SectionTitleLeft";
import Stats from "../components/home/Stats";
import Projects from "../components/home/Projects";

type Props = {};

const page = (props: Props) => {
  const values = [
    {
      title: "Excellence",
      content:
        "We strive for excellence in every project, paying close attention to the smallest detail to ensure delivery of high qaulity solutions for our clients.",
    },
    {
      title: "Innovation",
      content:
        "We embrace creative and innovative problem-solving approaches towards meeting our client's needs while implementing improvements where needed.",
    },
    {
      title: "Client-Centric Focus",
      content:
        "We prioritize a deep understanding of client goals while tailoring solutions to meet their specific business objectives and desired goals.",
    },
  ];
  return (
    <section className="flex-column pb-24">
      <PageHero
        heroImage={"/about/about-hero.png"}
        tag={"About Us"}
        title={"Effective Branding 101"}
        subtitle={
          "At Clever Developers, we dedicate our tools and years of experience in providing the best online portfolio for businesses, brand, and companies of different levels. Here is who we are and why us."
        }
      />
      {/* <section className="flex items-center justify-between gap-12 max-w-7xl py-24">
        <div className="left basis-full grid gap-2">
          <p className="tag font-handwriting text-2xl text-pink-500">
            Clever Developer 360
          </p>
          <p className="text-2xl hero-bold-font text-left">
            We are a website design and development agency dedicated to helping
            businesses and brands boost their online presence and increase their
            reach.
          </p>
          <p className="text-gray-500 text-base mb-4">
            We specialize in the design and building of modern, stunning and
            fast loading websites for different businesses and brands. We are a
            professional team of experts determined to give your brand a
            deserved online presence through the creation of bespoke websites as
            well as SEO services.
          </p>

          <Button url={"/contact"} title={"Get Started"} type="primary" />
        </div>
        <div className="right basis-full">
          <Image
            src={"/about/ecommerce.svg"}
            alt={"responsive website for your brand"}
            height={400}
            width={400}
            className="max-w-[550px] w-full "
          />
        </div>
      </section> */}
      <section className="py-24 px-4 shadow-lg w-full flex-column bg-gray-200 bg-opacity-30">
        <div className="max-w-7xl w-full">
          <SectionTitleLeft
            title={"What we believe in"}
            subtitle={""}
            tagline={"Our Core Values"}
          />
          <div className="grid md:grid-cols-3 gap-6 mt-6 mb-32">
            {values.map((v, index) => (
              <div
                className="space-y-2 bg-white md:bg-transparent shadow md:shadow-none p-4 md:p-0 rounded"
                key={index}
                data-aos="fade-up"
              >
                <p className="text-lg text-center md:text-left hero-bold-font text-pink-500">
                  {v.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed text-justify md:text-left">
                  {v.content}
                </p>
              </div>
            ))}
          </div>
          <Stats />
          <div className="mt-24 flex justify-center gap-4" data-aos="fade-down">
            <Button url={"/contact"} title={"Get Started"} type="primary" />
            <Button
              url={"/contact"}
              title={"View Our Services"}
              type="secondary"
            />
          </div>
        </div>
      </section>
      <Projects />
    </section>
  );
};

export default page;

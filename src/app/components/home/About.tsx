import React from "react";
import SectionTitleLeft from "../SectionTitleLeft";
import Button from "../Button";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  const skills = [
    {
      title: "Branding",
      icon: "/about/branding.png",
    },
    {
      title: "UI/UX",
      icon: "/about/ui.png",
    },
    {
      title: "Developement",
      icon: "/about/website.png",
    },
    {
      title: "Logo",
      icon: "/about/logo.png",
    },
    {
      title: "Design",
      icon: "/about/graphics.png",
    },
    {
      title: "Marketing",
      icon: "/about/marketing.png",
    },
    {
      title: "SEO",
      icon: "/about/seo.png",
    },
  ];
  return (
    <section className="py-[100px] px-4 overflow-x-hidden relative flex-column justify-center items-center">
      <div className="container grid md:grid-cols-2 items-center justify-between gap-12 xl:gap-32">
        <Image
          height={800}
          width={800}
          src="/about.png"
          alt="website developer and designer"
          className="max-w-[650px] md:min-w-[800px]  w-full md:order-2 p-4 md:p-0 basis-full"
          data-aos="fade-left"
        />
        <div
          className="grid gap-8 md:gap-4 md:order-1 basis-full"
          data-aos="fade-right"
        >
          <SectionTitleLeft
            tagline={"Creative Branding Solutions"}
            title={"Who we are"}
            subtitle={
              "We are a website design and development agency dedicated to helping businesses and brands boost their online presence and increase their reach."
            }
          />
          <div className="grid gap-3 flex-column relative">
            <Image
              height={80}
              width={80}
              src="/bg-blurb.png"
              alt="website developer designer"
              className="absolute h-[80%] w-[100%] -z-2 opacity-[0.15]"
            />
            <h2 className="font-bold text-xl mb-2">What we do</h2>
            <div className="skillset md:pl-8 grid grid-cols-4 md:grid-cols-5 gap-x-8 gap-y-6 md:gap-y-4 mb-8 md:mb-4">
              {skills.map((skill, index) => (
                <div className="flex-column gap-2" key={index}>
                  <Image
                    height={40}
                    width={40}
                    src={skill.icon}
                    alt={skill.title}
                    className="w-10 "
                  />
                  <p className="text-center text-gray-500 font-bold text-sm">
                    {skill.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:place-self-start md:pl-4">
              <Button url={"/about"} title={"More About Us"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

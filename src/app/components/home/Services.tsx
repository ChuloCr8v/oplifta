import React from "react";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import Image from "next/image";

type Props = {};

const Services = (props: Props) => {
  const serviceItems = [
    {
      title: "Branding",
      subtitle: "Crafting Distinctive Brands",
      body: "We specialize in creating unique brand identities that make your business stand out. Our team combines creativity and strategy to design compelling branding solutions that resonate with your audience.",
      link: "/services#branding",
    },
    {
      title: "UI/UX",
      subtitle: "User interface/experience",
      body: "Elevate your brand with our user-centered UI/UX design services. Our expert team crafts intuitive, engaging, and visually appealing interfaces that enhance user experiences and drive digital success. ",
      link: "/services#ui/ux",
    },
    {
      title: "Web",
      subtitle: "Website development",
      body: "Discover the art of digital transformation. We excel in crafting responsive, visually captivating, and user-centric websites. Our expertise in web design and development turns your concepts into compelling digital solutions, driving your brand's online success.",
      link: "/services#web",
    },

    // {
    //   title: "SEO",
    //   subtitle: "Crafting Distinctive Brand Identities",
    //   body: "We specialize in creating unique brand identities that make your business stand out. Our team combines creativity and strategy to design compelling branding solutions that resonate with your audience.",
    //   link: "/",
    // },
  ];
  return (
    <section className="relative flex-column px-4 py-12 bg-gray-100 w-screen">
      <SectionTitle
        title={"Our Services"}
        subtitle={
          "We provide various online branding services for businesses and brands all over. Landing pages, Ecommerce websites, blogs, professional portfolios all form part of what we do and much more..."
        }
      />
      <div className="wrapper service-items grid lg:grid-cols-3 items-center gap-6 mt-20 max-w-7xl w-full">
        {serviceItems.map((service, index) => (
          <div
            className="shadow-lg service-item p-4 py-8 rounded-lg flex flex-col items-center md:items-start gap-3 relative overflow-hidden bg-gray-50 xl:h-[300px]"
            data-aos="fade-up"
            key={index}
          >
            <Image
              height={240}
              width={240}
              src="/splash.png"
              alt="website developer designer"
              className="absolute left-0 top-0 opacity-20 h-60"
            />

            <p className="font-bold text-2xl text-pink-500 font-handwriting">
              {service.title}
            </p>
            <p className="font-bold text-gray-800 capitalize text-lg lg:text-2xl">
              {service.subtitle}
            </p>
            <p className="text-gray-500 mb-6 text-justify text-sm xl:h-[80px]">
              {service.body}
            </p>
            <Button url={service.link} title={"Learn More"} type="secondary" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

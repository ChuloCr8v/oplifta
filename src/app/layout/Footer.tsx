import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const menuOptions = [
    {
      title: "Menu",
      menu: [
        { title: "about us", link: "/about" },
        { title: "our services", link: "/services" },
        { title: "our work", link: "/work" },
        { title: "blog", link: "/blog" },
        { title: "contact us", link: "/contact" },
      ],
    },
    {
      title: "Services",
      menu: [
        { title: "full branding", link: "/branding" },
        { title: "Website Development", link: "/website" },
        { title: "Ecommerce Developement", link: "/ecommerce" },
        { title: "Logo Design", link: "/logo" },
        { title: "Graphics Design", link: "/graphics" },
        { title: "Digital Marketing", link: "/marketing" },
        { title: "Content Creation", link: "/content" },
      ],
    },
  ];
  return (
    <footer className="flex-column items-center justify-center px-4 py-10 bg-sky-950 relative overflow-x-hidden">
      <Image
        height={600}
        width={600}
        src="/bg-blurb.png"
        alt="website developer designer"
        className="absolute h-96 min-w-[600px] lg:w-[90%] -mt-10 opacity-10 z-0"
      />
      <div className="container lg:grid grid-cols-7 space-y-6 lg:space-y-0 relative z-10 lg:items-start  lg:gap-24">
        <div className="space-y-4 lg:col-span-3 md:flex flex-col items-center justify-center lg:items-start">
          <Image
            height={40}
            width={150}
            src="/logo.png"
            alt="clever developer website development and design agency"
            className="logo h-[40px]"
          />
          <p className="text-gray-400 text-justify md:max-w-[500px] md:text-center lg:text-justify">
            We are a website design and development company dedicated to helping
            businesses and brands boost their online presence and increase their
            reach.
          </p>
        </div>

        <div className="row grid lg:grid-cols-2 col-span-4 gap-6">
          {menuOptions.map((m, index) => (
            <div
              className="flex flex-col gap-4 md:items-center lg:items-start"
              key={index}
            >
              <p className="pt-3 text-lg text-white hero-bold-font lg:text-left flex justify-start">
                {m.title}
              </p>
              <div className="grid gap-3">
                {m.menu.map((submenu, index) => (
                  <Link
                    href={submenu.link}
                    key={index}
                    className="leading-none text-gray-400 hover:text-pink-500 duration-300 capitalize md:text-center lg:text-left"
                  >
                    {submenu.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 bg-gray-300 px-4 md:px-12 py-2 rounded-full capitalize font-semibold text-sky-950 text-sm">
        © copyright @ clever developers 360 {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;

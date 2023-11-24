import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";
import {
  FaAddressBook,
  FaAddressCard,
  FaQuestion,
  FaTimes,
  FaToolbox,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

type Props = {
  menuOpen: boolean;
  setMenuOpen: (arg0: boolean) => void;
};

const Nav = (props: Props) => {
  const currentRoute = usePathname();

  console.log(currentRoute);

  const navMenu = [
    {
      title: "About",
      url: "/about",
      hasChild: false,
      icon: (
        <FaUser className="group-hover:text-pink-500 duration-300 xl:hidden" />
      ),
    },
    {
      title: "Services",
      url: "/services",
      hasChild: true,
      icon: (
        <FaTools className="group-hover:text-pink-500 duration-300 xl:hidden" />
      ),
    },
    {
      title: "Projects",
      url: "/#projects",
      hasChild: true,
      icon: (
        <FaToolbox className="group-hover:text-pink-500 duration-300 xl:hidden" />
      ),
    },
    // {
    //   title: "Why Us",
    //   url: "/why-us",
    //   hasChild: true,
    //   icon: (
    //     <FaQuestion className="group-hover:text-pink-500 duration-300 xl:hidden" />
    //   ),
    // },
    {
      title: "Contact",
      url: "/contact",
      hasChild: true,
      icon: (
        <FaAddressCard className="group-hover:text-pink-500 duration-300 xl:hidden" />
      ),
    },
  ];

  const NavItem = (props: {
    setMenuOpen: (arg0: boolean) => void;
    item: {
      icon: ReactNode;
      url: string;
      title: string;
    };
  }) => {
    return (
      <Link
        onClick={() => props.setMenuOpen(false)}
        className={twMerge(
          "flex group items-center gap-4 text-sm  font-semibold text-white capitalize hover:bg-gray-700 xl:hover:bg-transparent xl:hover:text-pink-500 duration-150 xl:p-0 p-3 px-6 hover:shadow-inner xl:hover:shadow-none hover:shadow-gray-800 border-gray-800 border-b xl:border-none hover:border-l-4 hover:border-l-pink-500",
          currentRoute.includes(props.item.url)
            ? "text-pink-500 font-bold bg-gray-700 xl:bg-transparent shadow-inner xl:shadow-none border-l-pink-500 border-l-4 xl:border-none"
            : "xl:text-gray-500"
        )}
        href={props.item.url}
      >
        {props.item.icon}
        {props.item.title}
      </Link>
    );
  };

  return (
    <div className="">
      <div
        onClick={() => props.setMenuOpen(false)}
        className={twMerge(
          "fixed h-full  top-0 right-0 bg-gray-800 opacity-50 z-0 duration-200 xl:hidden",
          props.menuOpen ? "w-full" : "w-0"
        )}
      ></div>
      <nav
        className={twMerge(
          "flex flex-col xl:flex-row pt-48 xl:pt-0 bg-gray-600 xl:bg-transparent fixed xl:relative right-0 top-0 h-full xl:h-fit xl:w-fit xl:gap-4 overflow-hidden duration-500",
          props.menuOpen ? "w-full md:w-[80%]" : "w-0"
        )}
      >
        <div className="justify-items-between px-6 absolute top-10 left-0 w-full xl:hidden">
          <Link href={"/"} onClick={() => props.setMenuOpen(false)}>
            <Image
              height={10}
              width={140}
              src="/logo.png"
              alt="clever developer website design and development agency"
              className="h-8 -ml-2"
            />
          </Link>

          <FaTimes
            onClick={() => props.setMenuOpen(false)}
            className="text-2xl text-white bg-gray-800 bg-opacity-0 hover:p-2 rounded-full hover:bg-opacity-100 duration-300"
          />
        </div>
        {navMenu.map((item, index) => (
          <NavItem key={index} item={item} setMenuOpen={props.setMenuOpen} />
        ))}
        <div className="hidden xl:flex">
          <Button
            url={"/contact"}
            title={"Get Started"}
            className="bg-pink-500"
          />
        </div>
      </nav>
    </div>
  );
};

export default Nav;

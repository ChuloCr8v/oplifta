"use client";

import React, { useCallback, useEffect, useState } from "react";
import Nav from "../components/Nav";
import { twMerge } from "tailwind-merge";
import { FaBars, FaEllipsisH } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={twMerge(
        "flex-column py-3 bg-gry-300 fixed w-screen left-0 top-0 z-50 duration-200 px-4 bg-gray-50 ",
        !isVisible ? "shadow-md" : "shadow-none"
      )}
    >
      <div className="container justify-items-between max-w-7xl w-full">
        <Link className="logo" href={"/"}>
          <Image
            height={10}
            width={160}
            src="/logo-dark.png"
            alt="clever developer web design and development agency"
            className="h-8 w-auto lg:h-10 -ml-2 opacity-75"
          />
        </Link>
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <FaBars
          className="text-2xl hover:text-pink-500 duration-300 xl:hidden"
          onClick={() => setMenuOpen(true)}
        />
      </div>
    </header>
  );
};

export default Header;

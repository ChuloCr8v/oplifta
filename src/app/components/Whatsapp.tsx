import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const Whatsapp = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
    <Link href={"https://api.whatsapp.com/send?phone=2348138369977"}>
      <Image
        className={twMerge(
          "fixed -bottom-[200px] left-10 z-50 hover:opacity-75 duration-200",
          isVisible && "bottom-10"
        )}
        src={"/whatsapp.png"}
        alt="clever developer website design and developemnt whatapp"
        height={50}
        width={50}
      />
    </Link>
  );
};

export default Whatsapp;

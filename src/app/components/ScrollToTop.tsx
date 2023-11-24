import React, { useCallback, useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";

type Props = {};

const ScrollToTopIcon = (props: Props) => {
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
    <ScrollToTop
      smooth
      color="rgb(157 23 77)"
      className="text-pink-800 font-bold flex  items-center justify-center p-2"
    />
  );
};

export default ScrollToTopIcon;

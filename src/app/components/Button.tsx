import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  link?: boolean;
  url: string;
  title: string;
  type?: string;
  className?: string;
};

const Button = (props: Props) => {
  return (
    <div>
      {props.link ? (
        <Link
          href={props.url}
          className={twMerge(
            "link-btn group uppercase text-sm text-gray-500 duration-300 relative font-semibold mx-4",
            props.className
          )}
        >
          <div className="text-sm link-border absolute -bottom-1 border-b-4 border-secondary w-1 h-full duration-300 mx-4"></div>
          {props.title}
        </Link>
      ) : (
        <Link
          href={props.url}
          className={twMerge(
            "group flex items-center justify-center relative uppercase font-bold w-fit border border-gray-800 rounded-lg py-2 px-6 bg-gray-800 hover:border-secondary text-white duration-300 overflow-hidden",
            props.type === "secondary" &&
              "bg-transparent text-gray-800 relative flex items-center justify-center border-none px-0"
          )}
        >
          {props.type !== "secondary" && (
            <div className="h-full w-0 group-hover:h-full group-hover:w-full left-0 bottom-0 bg-secondary absolute z-10 duration-300"></div>
          )}
          <span className="relative z-10 text-[12px]">{props.title}</span>
          {props.type === "secondary" && (
            <div className="absolute z-0 flex flex-col items-center justify-center opacity-50 group-hover:opacity-100 duration-300">
              <div
                className={twMerge(
                  `h-7 w-7 rounded-full border-2 border-gray-400  group-hover:border-secondary duration-300 absolute`
                )}
              ></div>
              <div
                className={twMerge(
                  `h-5 w-5 rounded-full border-2 border-gray-400  group-hover:border-secondary duration-300 absolute`
                )}
              ></div>
              <div
                className={twMerge(
                  `h-3 w-3 rounded-full border-2 border-gray-400  group-hover:border-secondary duration-300 absolute`
                )}
              ></div>
              <div
                className={twMerge(
                  `h-1 w-1 rounded-full border-2 border-gray-400  group-hover:border-secondary duration-300 absolute`
                )}
              ></div>
            </div>
          )}
        </Link>
      )}
    </div>
  );
};

export default Button;

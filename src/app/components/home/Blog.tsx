import React from "react";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Blog = (props: Props) => {
  const blogs = [
    {
      title: "10 reasons why you need a Custom Website for Your Business",
      img: "/blog/custom-website.jpg",
      link: "/",
    },
    {
      title: "Businesses: How an E-commerce website Can Help You Sell More",
      img: "/blog/ecommerce.png",
      link: "/",
    },
    {
      title: "Choosing the Right Freelance Developer: A Guide for Businesses",
      img: "/blog/website.jpeg",
      link: "/",
    },
  ];
  return (
    <section id="blog" className="py-20 px-4">
      <SectionTitle
        title={"blog"}
        subtitle={"Check out updates from us for many good reasons"}
      />
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-4 md:gap-y-16 mt-20">
        {blogs.map((b, index) => (
          <div
            className="flex-column max-w-[500px] w-full bg-white relative rounded-lg shadow"
            data-aos="fade-up"
            key={index}
          >
            <div className="h-[300px] w-fit overflow-hidden">
              {" "}
              <Image
                height={400}
                width={400}
                src={b.img}
                alt={b.title}
                className="object-cover h-full rounded-lg"
              />
            </div>

            <Link
              className="absolute hover:shadow-none text-gray-500 duration-300 flex-column -bottom-[30px] text-center bg-white shadow-xl rounded p-3 mx-4 font-handwriting text-xl hover:text-pink-500 leading-7 font-bold cursor-pointer underline underline-offset-2"
              href={b.link}
            >
              {b.title}
              <Image
                height={80}
                width={80}
                src="/bg-blurb.png"
                alt="website developer designer"
                className="absolute h-16 -mt-2 w-[60%] -z-2 opacity-10"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

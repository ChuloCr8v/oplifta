import React from "react";
import SectionTitle from "../SectionTitle";
import SectionTitleLeft from "../SectionTitleLeft";
import Button from "../Button";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  const data = [
    {
      title: "LaChiommy Legal Services",
      description:
        "A Law firm website which highlights their various services, details, about and contact section.",
      img: "/projects/lachiommy.png",
      link: "www.lachiommylegal.com",
    },

    {
      title: "Uknight",
      description:
        "This is a website template with a sleek design and important sections for startups and businesses alike. Available section include Hero, features, About Us, Call To Action, Contact Section, etc.",
      img: "/projects/uknight.png",
      link: "https://uknight.netlify.app/",
    },
    {
      title: "Fit Fam",
      description:
        "This is gym website that showcases the services of a gym brand. It contains basic details about the gym facility. You can see such sections as Hero, About, Services, Contact, etc.",
      img: "/projects/fitfam.png",
      link: "https://fit-fam.netlify.app/",
    },
  ];
  return (
    <section id="projects">
      <div className="wrapper grid md:grid-cols-2 gap-4 items-center max-w-7xl w-full px-4 py-12">
        <div className="mb-12 lg:mb-0">
          <SectionTitleLeft
            title={"What we have done"}
            subtitle={
              "We specialize in the design and building of modern, stunning and fast loading websites for different businesses and brands."
            }
            tagline={"Meet our exploits"}
            background
          />
        </div>
        {data.map((p, index) => (
          <div
            className="group relative flex-column overflow-hidden rounded-xl shadow-lg"
            key={index}
            data-aos="fade-up"
          >
            <div className="h-full w-full bg-black opacity-20 absolute left-0 top-0"></div>
            <Image
              height={900}
              width={900}
              src={p.img}
              alt="website developer project"
              className=""
            />
            <div className="absolute -bottom-[300%] group-hover:bottom-2 md:group-hover:bottom-8 flex-column gap-1 bg-white rounded-2xl shadow-xl max-w-[90%] w-full p-2  md:p-4 text-center duration-300 overflow-hidden">
              <Image
                height={24}
                width={24}
                src="/splash.png"
                alt="website developer designer"
                className="absolute left-0 top-0 opacity-10 h-60"
              />
              <p className="text-xl text-pink-500 font-bold font-handwriting">
                {p.title}
              </p>
              <p className="text-gray-500 text-justify text-sm mb-2 md:mb-4">
                {p.description.slice(0, 100)}...
              </p>
              <Button url={p.link} title={"Visit"} type="secondary" link />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

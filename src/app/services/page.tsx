import Image from "next/image";
import { twMerge } from "tailwind-merge";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Projects from "../components/home/Projects";
import Button from "../components/Button";

type Props = {};

const page = (props: Props) => {
  const uIList = [
    {
      icon: "/services/user-centric.png",
      title: "User-Centric Design",
      content:
        "At the heart of our UI/UX development process is a deep understanding of your target audience. We craft intuitive interfaces that resonate with your users, ensuring a seamless and enjoyable experience.",
    },
    {
      icon: "/services/research.png",
      title: "Research and Analysis",
      content:
        "Before any pixels are placed, we conduct extensive research to comprehend your brand, industry, and user behaviors. This informs our design decisions, guaranteeing solutions that align perfectly with your objectives.",
    },
    {
      icon: "/services/wireframing.png",
      title: "Wireframing and Prototyping",
      content:
        "We believe in an iterative design approach. Our team develops detailed wireframes and interactive prototypes, allowing you to visualize the user journey and make informed decisions early in the process.",
    },
  ];

  const brandList = [
    {
      icon: "/services/strategy.png",
      title: "Brand Strategy",
      content:
        "In the dynamic landscape of today's business world, a robust brand strategy is the foundation for sustainable growth. We work closely with you to define your brand's core values, mission, and vision, ensuring a strategic roadmap for success.",
    },
    {
      icon: "/services/development.png",
      title: "Website Design and Development",
      content:
        "Your website is often the first interaction a potential customer has with your brand. Our web design and development services focus on creating user-friendly, aesthetically pleasing websites that convey your brand message effectively.",
    },
    {
      icon: "/services/logo-design.png",
      title: "Logo Design and Identity",
      content:
        "Our talented design team specializes in creating logos and visual identities that encapsulate your brand essence. From concept to execution, we ensure your logo is a powerful symbol that communicates your brand story at a glance.",
    },
    {
      icon: "/services/visual.png",
      title: "Visual Branding",
      content:
        "From color schemes to typography, our visual branding services ensure that every visual element aligns seamlessly with your brand identity. We create a cohesive and visually appealing brand presence across all touchpoints.",
    },
    {
      icon: "/services/content.png",
      title: "Brand Content",
      content:
        "Crafting compelling and consistent brand messaging is crucial for connecting with your audience. We develop messaging frameworks that articulate your brand's personality, values, and value propositions across all communication channels.",
    },

    {
      icon: "/services/social.png",
      title: "Social Media Branding",
      content:
        "Our social media branding services leverage the power of social platforms to enhance your brand visibility and engagement. We create compelling content and cohesive visuals that resonate with your audience across various social media channels.",
    },
  ];

  const devList = [
    {
      icon: "/services/development.png",
      title: "Custom Web Development",
      content:
        "We specialize in crafting custom web applications that align seamlessly with your business processes. From complex e-commerce platforms to intuitive content management systems, our custom web development services are designed to elevate your online presence.",
    },
    {
      icon: "/services/frontend.png",
      title: "Front-End Development",
      content:
        "Our front-end development team focuses on creating visually stunning and user-friendly interfaces. Leveraging the latest technologies and design trends, we ensure that your website provides an immersive and engaging experience for your visitors.",
    },
    {
      icon: "/services/ecommerce.png",
      title: "E-Commerce Development",
      content:
        "Whether you're a small business or a large enterprise, our e-commerce development services are tailored to meet your specific needs. From secure payment gateways to intuitive product catalogs, we create e-commerce solutions that drive conversions and enhance the online shopping experience.",
    },
    {
      icon: "/services/cms.png",
      title: "Content Management System",
      content:
        "Take control of your website's content with our CMS development services. We empower you with user-friendly interfaces that make updating and managing your website content a breeze, allowing you to focus on what matters most – your business.",
    },
    {
      icon: "/services/maintenance.png",
      title: "Website Maintenance and Support",
      content:
        "We don't just build websites; we ensure they evolve with your business. Our maintenance and support services cover everything from regular updates and security patches to troubleshooting and performance optimization, keeping your website running at its best.",
    },

    {
      icon: "/services/social.png",
      title: "Responsive Web Design",
      content:
        "With the growing diversity of devices, responsive web design is a necessity. Our experts create websites that automatically adjust to different screen sizes, ensuring a consistent and visually appealing experience for users on desktops, tablets, and smartphones.",
    },
  ];

  const ServiceItem = (props: {
    id: string;
    sectionTitle: string;
    bg?: boolean;
    sectionSubtiitle: string;
    serviceList: {
      icon: string;
      title: string;
      content: string;
    }[];
  }) => {
    return (
      <section
        id={props.id}
        className={twMerge(
          "w-screen flex-column px-4",
          props.bg && "bg-gray-100 py-16 shadow"
        )}
      >
        <SectionTitle
          title={props.sectionTitle}
          subtitle={props.sectionSubtiitle}
        />

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 mt-12 gap-6 max-w-7xl">
          {props.serviceList.map((s, index) => (
            <div
              className="space-y-2 rounded shadow-md p-4 bg-white"
              key={index}
              data-aos="fade-up"
            >
              <Image
                src={s.icon}
                height={45}
                width={45}
                className=""
                alt={s.title}
              />
              <p className="text-gray-900 font-bold capitalize text-xl">
                {s.title}
              </p>
              <p className="text-gray-500 text-justify text-sm">{s.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-12" data-aos="fade-down">
          <Button url={"/"} title={"Get Started"} />
        </div>
      </section>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <PageHero
        tag={"Our Services"}
        title={"Allow us push your business."}
        subtitle={
          "We provide various online branding services for businesses and brands all over. Landing pages, Ecommerce websites, blogs, professional portfolios all form part of what we do and much more"
        }
        heroImage={"/services/service-hero.png"}
      />
      <section className="max-w-7xl w-full py-24 relative flex-column justify-center gap-24">
        {/* <Image
          height={156}
          width={300}
          src="/bg-blurb.png"
          alt="website developer designer"
          className="fixed top-1/2 h-96 -mt-48 w-[100%] -z-2 opacity-10 z-0"
        /> */}

        <ServiceItem
          id={"branding"}
          sectionTitle={"Branding Services"}
          sectionSubtiitle={
            "We offer a comprehensive suite of branding services designed to elevate your brand presence, resonate with your target audience, and establish a lasting impact in the market. Our team of seasoned experts is dedicated to crafting unique and memorable brand experiences. Explore our diverse range of services below"
          }
          serviceList={brandList}
        />
        <ServiceItem
          id={"ui/ux"}
          sectionTitle={"UI/UX Development"}
          sectionSubtiitle={
            "Elevate your brand with our user-centered UI/UX design services. Our expert team crafts intuitive, engaging, and visually appealing interfaces that enhance user experiences and drive digital success. "
          }
          serviceList={uIList}
          bg
        />
        <ServiceItem
          id={"web"}
          sectionTitle={"Web Development"}
          sectionSubtiitle={
            "We are dedicated to creating dynamic and responsive web solutions tailored to meet your business needs. Explore our comprehensive range of web development services below"
          }
          serviceList={devList}
        />
      </section>
      <section className="bg-gray-100 w-full flex-column pb-16">
        <Projects />
      </section>
    </div>
  );
};

export default page;

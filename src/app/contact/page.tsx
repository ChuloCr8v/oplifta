import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Select } from "antd";

type Props = {};

const page = (props: Props) => {
  const Label = (props: { title: string }) => {
    return (
      <label className="font-semibold capitalize text-xl text-gray-700">
        {props.title}
      </label>
    );
  };

  const FormItem = (props: {
    label: string;
    placeholder: string;
    type?: string;
  }) => {
    return (
      <div className="flex flex-col items-start gap-2 relative z-20">
        <Label title={props.label} />
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="border border-gray-300 rounded py-4 px-3 w-full bg-white hover:border-pink-500 duration-500 "
        />
      </div>
    );
  };

  const options = [
    {
      value: "branding",
      label: "Branding",
    },
    {
      value: "website development",
      label: "Website Development",
    },
    {
      value: "ui/ux Design",
      label: "Ui/Ux Design",
    },
    {
      value: "logo design",
      label: "Logo Design",
    },
    {
      value: "others",
      label: "others",
    },
  ];

  return (
    <section className="px-4 flex-column contact">
      <div
        className="flex flex-col items-center justify-center gap-2 relative z-20 w-screen h-screen bg-white "
        data-aos="fade-up"
      >
        <div className="flex items-center text-pink-500 text-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <Image
          height={160}
          width={300}
          src="/bg-blurb.png"
          alt="website developer designer"
          className="absolute h-72 w-[80%] -z-2 opacity-10"
        />
        <h2 className="text-[35px] md:text-[60px] text-gray-800 font-bold relative flex flex-col justify-center items-center capitalize">
          Contact Us
          <div className="absolute bottom-2 -z-10 h-2 w-[80%] bg-pink-500"></div>
        </h2>
        <h2 className="text-gray-500 text-[20px] md:text-[30px] text-center max-w-[1000px] w-full normal-case px-3">
          Have a project in mind? Or an enquiry maybe? Leave us a message then,
          we will get back faster than you expect us to.
        </h2>
      </div>
      <div className="w-screen flex flex-col items-center bg-gray-100">
        <div className="max-w-7xl w-full py-12 ">
          <div className="w-full relative flex items-center justify-center">
            {/** Bg Image */}
            <Image
              height={500}
              width={500}
              src="/bg-blurb.png"
              alt="website developer"
              className="fixed top-0 h-[500px] w-[95%] z-0 opacity-[0.16]"
            />
            <h2 className="text-[30px] md:text-[50px] text-gray-800 font-bold relative flex flex-col justify-center items-center capitalize w-fit text-center">
              Message
              <div className="absolute bottom-2 -z-10 h-2 w-[80%] bg-pink-500"></div>
            </h2>{" "}
          </div>

          <form
            action=""
            className="grid md:grid-cols-2 gap-8 w-full mt-12 px-4"
            data-aos="fade-up"
          >
            <div className="grid gap-8">
              <FormItem label={"Name"} placeholder={"Enter name here"} />
              <FormItem
                label={"Email Address"}
                placeholder={"Enter valid email address"}
              />
              <FormItem
                label={"Phone Number"}
                placeholder={"Enter phone number here"}
              />
            </div>
            <div className="space-y-14">
              <div className="flex flex-col items-start gap-2">
                <Label title={"Service of Interest"} />
                <Select
                  style={{ width: 200 }}
                  placeholder="Select service of interest"
                  options={options}
                />
              </div>

              <div className="flex flex-col items-start gap-2 relative z-20">
                <Label title={"Message"} />
                <textarea
                  className="border border-gray-300 bg-white rounded py-2 px-3 w-full hover:border-pink-500 duration-200"
                  cols={100}
                  rows={7}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;

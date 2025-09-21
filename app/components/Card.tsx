"use client";
import React from "react";
import Image from "next/image";

interface props {
  title: string;
  img_url: string;
  location: string;
  company: string;
  description: string;
  categories: string[];
  onClick: () => void;
}
const Card = ({
  title,
  img_url,
  location,
  company,
  description,
  categories,
  onClick,
}: props) => {
  const colors = [
    "border-yellow-400 text-yellow-400",
    "border-green-400 text-green-400",
    "border-purple-400 text-purple-400",
    "border-red-400 text-red-400",
  ];
  return (
    <>
      <div
        className="m-3  flex flex-col gap-3 w-150 md:w-300 p-5 border border-gray-200 rounded-xl shadow-md 
             hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
             transition duration-300 ease-out animate-fadeInUp"
        onClick={onClick}
      >
        {/* Avatar / Logo */}
        <div className="flex">
          <Image
            src={"/image" + img_url}
            alt={title}
            width={60}
            height={60}
            className=" rounded-full object-cover  "
          />
          {/* Job Title */}
          <h1 className="text-yellow-400 text-lg font-semibold  mx-3">
            {title}
          </h1>
          <div className="text-xs text-gray-400 absolute mx-16 mt-7">
            <span className="mr-1">{company}</span>
            <span>. {location}</span>
          </div>
        </div>
        {/* Description */}
        <p className="text-sm  text-left ml-10">{description}</p>
        <div className="gap-2 ml-10">
          <span className="text-green-600 bg-green-200 p-1.5 ml-1 border  rounded-full hover:bg-amber-300 hover:text-amber-50 hover:shadow-md ">
            In person
          </span>
          <span className="w-px h-6 border-gray-500"></span>
          {categories.map((value) => (
            <span
              key={value}
              className={
                "p-1.5 ml-1 border  rounded-full hover:bg-amber-300 hover:text-amber-50 hover:shadow-md hover:shadow-emerald-600 cursor-pointer" +
                colors[Math.floor(Math.random() * colors.length)]
              }
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;

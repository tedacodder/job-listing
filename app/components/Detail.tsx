"use client";

import React from "react";
import jobs from "../jobs/jobs.json";
import { useCardStore } from "./store";
import { useGetJobsByIdQuery } from "../lib/service/jobs";
const Detail = () => {
  type job = {
    title: string;
    description: string;
    responsibilities: string[];
    ideal_candidate: {
      age: string;
      gender: string;
      traits: string[];
    };
    when_where: string;
    about: {
      posted_on: string;
      deadline: string;
      location: string;
      start_date: string;
      end_date: string;
      categories: string[];
      required_skills: string[];
    };
  };

  const colors = [
    "border-yellow-400 text-yellow-400 bg-yellow-100 rounded-full",
    "border-green-400 text-green-400 bg-green-100 rounded-full",
    "border-purple-400 text-purple-400 bg-purple-100 rounded-full",
    "border-red-400 text-red-400 bg-red-100 rounded-full",
  ];
  const { index } = useCardStore();
  const i: string = index === null ? "" : index;
  const { data, error, isLoading } = useGetJobsByIdQuery(i);
  if (i === "") {
    return <h1>pick a job </h1>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something Went Wrong</p>;
  }
  return (
    <>
      <div className="grid grid-cols-5 mb-5">
        <div className="col-span-4 mx-3">
          <h1 className="text-xl font-bold mt-10 mb-4">Description</h1>
          <span>{data.data.description}</span>
          <h1 className="text-xl font-bold mt-10 mb-4">Responsibilities</h1>

          <div className="flex items-center">
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-5 border rounded-full p-1 flex  mr-2 text-green-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              ></path>
            </svg>
            <span>{data.data.responsibilities}</span>
          </div>

          <h1 className="text-xl font-bold mt-10 mb-4">
            Ideal Candidate We Want
          </h1>
          <ul className="list-disc list-inside">
            {/* <li>
               Age {data.ideal_candidate.age} {data.ideal_candidate.gender}{" "}
              {data.title} 
            </li> */}

            <li key={i}>{data.data.idealCandidate}</li>
          </ul>
          <h1 className="text-xl font-bold mt-10 mb-4 ">When & Where</h1>
          <div className="flex items-center">
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-10 border border-black rounded-full p-1 flex bg-yellow-600 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              ></path>
            </svg>
            <span>{data.data.whenAndWhere}</span>
          </div>
        </div>
        <div className="m-5">
          <h1 className="text-xl font-bold">About</h1>
          <ul className="text-sm space-y-5 my-4">
            <li className="flex items-start">
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-10 border border-black rounded-full p-1 flex bg-yellow-600 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
              <div className="flex flex-col">
                <span className="text-gray-500">Posted on</span>
                <div className=" ">{data.data.datePosted.slice(0, 10)}</div>
              </div>
            </li>

            <li className="flex items-start">
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-10 border border-black rounded-full p-1 flex bg-yellow-600 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                ></path>
              </svg>
              <div className="flex flex-col">
                <span className="text-gray-500">Deadline</span>
                <div className=" ">{data.data.deadline.slice(0, 10)}</div>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-10 border border-black rounded-full p-1 flex bg-yellow-600 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                ></path>
              </svg>
              <div className="flex flex-col">
                <span className="text-gray-500">Location</span>
                <div className=" ">{data.data.location.join(" , ")}</div>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-10 border border-black rounded-full p-1 flex bg-yellow-600 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                ></path>
              </svg>
              <div className="flex flex-col">
                <span className="text-gray-500">Start Date</span>
                <div className=" ">{data.data.startDate.slice(0, 10)}</div>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-10 border border-black rounded-full p-1 flex bg-yellow-600 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                ></path>
              </svg>
              <div className="flex flex-col">
                <span className="text-gray-500">End Date</span>
                <div className=" ">{data.data.endDate.slice(0, 10)}</div>
              </div>
            </li>
          </ul>
          <hr className="my-4 border-t-2 border-gray-300" />
          <h1 className="text-xl font-bold mb-4">Categories</h1>
          <div className="flex flex-wrap gap-2">
            {data.data.categories.map((text: string, i: number) => (
              <span
                key={i}
                className={
                  "p-1.5 mr-2 pt-1 mb-5" +
                  colors[Math.floor(Math.random() * colors.length)]
                }
              >
                {text}
              </span>
            ))}
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          <h1 className="text-xl font-bold my-3">Required Skills</h1>
          <div className="flex flex-wrap gap-2">
            {data.data.requiredSkills.map((text: string, i: number) => (
              <span
                key={i}
                className="text-purple-950 bg-purple-200 mr-3 px-3 py-1 font-semibold "
              >
                {text}
              </span>
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

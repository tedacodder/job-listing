"use client";
import React from "react";
import jobs from "../jobs/jobs.json";
import Card from "./Card";
import Link from "next/link";
import { useCardStore } from "./store";
const JobListingDashboard = () => {
  const { setindex } = useCardStore();
  return (
    <div className="ml-20 mt-15 ">
      <h1 className="font-bold text-3xl mb-0 ">Opportunities</h1>
      <span className="text-sm text-gray-500">
        Showing {jobs.job_postings.length} results
      </span>

      {jobs.job_postings.map((value, i) => (
        <div
          onClick={() => {
            {
              setindex(i);
              console.log(i);
            }
          }}
          key={i}
        >
          <Link href="/description">
            <Card
              key={value.title}
              title={value.title}
              img_url={value.image}
              location={value.about.location}
              company={value.company}
              description={value.description}
              categories={value.about.categories}
              onClick={() => {
                setindex(i);
                console.log(i);
              }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobListingDashboard;

"use client";
import React from "react";
import jobs from "../jobs/jobs.json";
import Card from "./Card";
import Link from "next/link";
import { useGetAllJobsQuery } from "../lib/service/jobs";
import { useCardStore } from "./store";
type job = {
  id: string;
  title: string;
  logoUrl: string;
  location: string[];
  orgName: string;
  description: string;
  categories: string[];
  opType: string;
};
const JobListingDashboard = () => {
  const { setindex } = useCardStore();
  const { data, error, isLoading } = useGetAllJobsQuery(-1);
  console.log(data);
  if (error) {
    return <p>Something Went Wrong!!!</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="ml-20 mt-15 ">
      <h1 className="font-bold text-3xl mb-0 ">Opportunities</h1>
      <span className="text-sm text-gray-500">
        Showing {data?.data.length} results
      </span>

      {data?.data.map((value: job, i: number) => (
        <div
          // onClick={() => {
          //   {
          //     setindex(value.id);

          //   }
          // }}
          key={i}
        >
          <Link href="/description">
            <Card
              key={value.title}
              title={value.title}
              img_url={value.logoUrl}
              location={value.location.join(",")}
              company={value.orgName}
              description={value.description}
              categories={value.categories}
              opType={value.opType}
              onClick={() => {
                setindex(value.id);
                console.log(value.id);
              }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobListingDashboard;

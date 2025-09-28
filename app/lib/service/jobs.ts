import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const jobApi=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:"https://akil-backend.onrender.com"}),
    endpoints:(builder) =>({
        //get all jobs
        getAllJobs:builder.query({
            query:()=>'/opportunities/search'
        }),
        getJobsById:builder.query({
            query:(id)=>`/opportunities/${id}`
        }),
    }),
})
export const {useGetAllJobsQuery,useGetJobsByIdQuery}=jobApi
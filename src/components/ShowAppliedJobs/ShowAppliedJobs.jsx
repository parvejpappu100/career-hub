import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const ShowAppliedJobs = ({ job }) => {

    const navigate = useNavigate();

    const handleGoDetails = () =>{
        navigate(-1)
    }

  const { img, post, company, job_type, location, office_add, salary } = job;
  return (
    <div>
      <div className="border border-gray-100 rounded-xl shadow bg-sky-50 flex flex-col lg:flex-row lg:items-center justify-between my-5 ">
        <div className=" p-3 flex flex-col lg:flex-row lg:items-center gap-5">
          <img className=" w-64 h-64" src={img} alt="" />
          <div>
            <h6 className="text-2xl font-medium my-2">{post}</h6>
            <h6 className="text-xl my-2">{company}</h6>
            <div className="flex items-center gap-5 my-3">
              <h6 className="job-btn">{location}</h6>
              <h6 className="job-btn">{job_type}</h6>
            </div>
            <div className="flex gap-4 items-center my-3">
              <div className="flex gap-1 items-center">
                <MapPinIcon className="h-6 w-6 " />
                <h6>{office_add}</h6>
              </div>
              <div className="flex items-center gap-1">
                <CurrencyDollarIcon className="h-6 w-6 " />
                <h6>Salary : {salary}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
            <button onClick={handleGoDetails} className="btn-job-primary p-3 my-5 text-white rounded font-semibold">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ShowAppliedJobs;

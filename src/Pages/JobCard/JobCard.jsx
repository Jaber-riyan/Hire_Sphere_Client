import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const [otherAppliedJobData, setOtherAppliedJobData] = useState([]);

  const {
    title,
    location,
    jobType,
    company,
    description,
    salaryRange,
    requirements,
    company_logo,
    _id
  } = job;

  useEffect(() => {
    fetch(`https://hire-sphere-server.vercel.app/job-application-count?id=${_id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setOtherAppliedJobData(data.data)
      })
  }, [_id])

  return (
    <div className=" p-6 bg-white shadow-md rounded-md border border-gray-200 flex flex-col justify-between">
      {/* Company Info */}
      <div>
        <div className="flex items-center mb-4">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-10 h-10 rounded-md object-cover"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
          <div className="ml-3">
            <h2 className="text-lg font-semibold text-gray-800">{company}</h2>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>

        {/* Job Title */}
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <p className="mr-2">{jobType}</p>
          <span className="w-1 h-1 rounded-full bg-gray-500 mx-1"></span>
          <p>4 minutes ago</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-4">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {requirements.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        {/* Others People applied count  */}
        <div className="mt-4">
          <h2 className="font-bold text-[1rem] mb-4">Applied Peoples: {otherAppliedJobData.length}</h2>
        </div>
      </div>

      {/* Salary and Apply Button */}
      <div className="flex items-center justify-between mt-6">
        <div>
          <p className="text-[1rem] font-bold text-blue-600">
            {salaryRange.currency.toUpperCase()} {salaryRange.min}-{salaryRange.max}/Month
          </p>
        </div>
        <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
          <Link to={`/job-detail/${_id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
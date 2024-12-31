import React from "react";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router-dom";

const JobDetail = () => {
  const job = useLoaderData(); // Loader data will match your provided structure
  const {
    title,
    location,
    jobType,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    applicationDeadline,
    hr_name,
    hr_email,
    company_logo,
    _id
  } = job.data;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Job Header */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
            <p className="flex items-center text-gray-500">
              <FaBriefcase className="mr-2 text-blue-500" /> {jobType} •{" "}
              <FaCalendarAlt className="ml-2 mr-1 text-blue-500" /> Application Deadline:{" "}
              {applicationDeadline}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Link to={`/job-apply/${_id}`}>Apply Now</Link>
          </motion.button>
        </motion.div>
      </div>

      {/* Job Details */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        {/* Job Description and Requirements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md col-span-2"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Description</h2>
          <p className="text-gray-600">{description}</p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-600">
            {responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600">
            {requirements.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </motion.div>

        {/* Company and Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <img
              src={company_logo}
              alt={`${company} logo`}
              className="w-16 h-16 object-cover rounded-md"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-600">
            <strong>HR Name:</strong> {hr_name}
          </p>
          <p className="text-gray-600">
            <strong>HR Email:</strong> {hr_email}
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Salary Range</h2>
          <p className="text-gray-600">
            <FaMoneyBillWave className="mr-2 text-blue-500 inline" />{" "}
            {salaryRange.currency.toUpperCase()} {salaryRange.min}-{salaryRange.max} per month
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetail;

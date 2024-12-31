import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const AddJobs = () => {
    const navigate = useNavigate();
    const {user} = useAuth();
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        jobType: "",
        category: "",
        applicationDeadline: "",
        min: "",
        max: "",
        currency: "",
        description: "",
        company: "",
        requirements: "",
        responsibilities: "",
        hr_email: user.email,
        hr_name: user.displayName,
        company_logo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = {
            min, max, currency
        }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        newJob.status = 'active'
        console.log(newJob);
        fetch('https://hire-sphere-server.vercel.app/jobs', {
            body: JSON.stringify(newJob),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Job has been added',
                    icon: 'success',
                    timer: 3000
                })
                console.log(data);
                navigate('/posted-jobs');

            })
        // setFormData({
        //     title: "",
        //     location: "",
        //     jobType: "",
        //     category: "",
        //     applicationDeadline: "",
        //     min: "",
        //     max: "",
        //     currency: "",
        //     description: "",
        //     company: "",
        //     requirements: "",
        //     responsibilities: "",
        //     hr_email: "",
        //     hr_name: "",
        //     company_logo: ""
        // });
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Add a Job</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Job Title */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Job Title"
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location"
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>

                    {/* Job Type */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Job Type</label>
                        <select
                            name="jobType"
                            value={formData.jobType}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        >
                            <option value="">Select Job Type</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                            <option value="On-site">On-site</option>
                        </select>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required 
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        >
                            <option value="">Select Category</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finance">Finance</option>
                            <option value="Teaching">Teaching</option>
                            <option value="Management">Management</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Design">Design</option>
                            <option value="Development">Development</option>
                        </select>
                    </div>

                    {/* Application Deadline */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Application Deadline</label>
                        <input
                            type="date"
                            name="applicationDeadline"
                            value={formData.applicationDeadline}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>

                    {/* Minimum Salary */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Minimum Salary</label>
                        <input
                            type="number"
                            name="min"
                            value={formData.min}
                            onChange={handleChange}
                            placeholder="Min Salary"
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>

                    {/* Maximum Salary */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Maximum Salary</label>
                        <input
                            type="number"
                            name="max"
                            value={formData.max}
                            onChange={handleChange}
                            placeholder="Max Salary"
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>

                    {/* Currency */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Currency</label>
                        <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        >
                            <option value="">Select Salary Currency</option>
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                            <option value="INR">INR</option>
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Job Description"
                        required
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none h-24 resize-none"
                    />
                </div>

                {/* Requirements */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Requirements</label>
                    <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="Put Each requirements in a new line"
                        required
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none h-24 resize-none"
                    />
                </div>

                {/* Responsibilities */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Responsibilities</label>
                    <textarea
                        name="responsibilities"
                        value={formData.responsibilities}
                        onChange={handleChange}
                        placeholder="Put Each responsibilities in a new line"
                        required
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none h-24 resize-none"
                    />
                </div>

                {/* HR Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">HR Email</label>
                        <input
                            type="email"
                            name="hr_email"
                            // value={formData.hr_email}
                            // onChange={handleChange}
                            defaultValue={user.email}
                            readOnly
                            placeholder="HR Email"
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">HR Name</label>
                        <input
                            type="text"
                            name="hr_name"
                            // value={formData.hr_name}
                            // onChange={handleChange}
                            defaultValue={user.displayName}
                            readOnly
                            placeholder="HR Name"
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name"
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>
                    {/* Company Logo */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Company Logo</label>
                        <input
                            type="url"
                            name="company_logo"
                            value={formData.company_logo}
                            onChange={handleChange}
                            placeholder="Company Logo"
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Add Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJobs;

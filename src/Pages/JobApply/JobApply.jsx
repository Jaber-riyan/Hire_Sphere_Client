import React, { useState } from "react";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const JobApply = () => {
    const [formData, setFormData] = useState({
        linkedinURL: "",
        githubURL: "",
        resumeURL: "",
    });
    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            ...formData
        }
        console.log(jobApplication);
        fetch('https://hire-sphere-server.vercel.app/jobs-application', {
            body: JSON.stringify(jobApplication),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                if (!data.status) {
                    Swal.fire({
                        title: data.message,
                        icon: 'info',
                        timer: 3000
                    })
                    console.log(data);
                }
                else {
                    Swal.fire({
                        title: 'Successfully Applied',
                        icon: 'success',
                        timer: 3000
                    })
                    console.log(data);
                    navigate('/applied-jobs-list');
                }


            })
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Apply Job & Good Luck</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* LinkedIn URL */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">LinkedIn URL</label>
                    <input
                        type="url"
                        name="linkedinURL"
                        value={formData.linkedinURL}
                        onChange={handleChange}
                        placeholder="https://www.linkedin.com/in/your-profile"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                </div>

                {/* GitHub URL */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">GitHub URL</label>
                    <input
                        type="url"
                        name="githubURL"
                        value={formData.githubURL}
                        onChange={handleChange}
                        placeholder="https://github.com/your-username"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                </div>

                {/* Resume URL */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Resume URL</label>
                    <input
                        type="url"
                        name="resumeURL"
                        value={formData.resumeURL}
                        onChange={handleChange}
                        placeholder="https://your-website.com/resume.pdf"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;

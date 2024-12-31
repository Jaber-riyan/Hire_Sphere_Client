import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth/UseAuth';

const ViewApplications = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);
    const { user } = useAuth();

    return (
        <div className='md:w-[80%] mx-auto mb-5'>
            <h2 className="text-[1.7rem] mt-5 font-bold mb-5">Applications for this Job</h2>
            <div>
                {
                    loaderData.data.map((application, index) => {
                        return <div key={application._id} className='flex items-center gap-4'>
                            <h2 className='text-xl font-bold'>
                                {index + 1}. {application.applicant_email} {user.email == application.applicant_email ? "(You)" : ""}</h2>
                            <select className="select select-bordered select-xs w-full max-w-xs">
                                <option disabled selected>Change Status</option>
                                <option>Under Review</option>
                                <option>Set Interview</option>
                                <option>Hired</option>
                                <option>Rejected</option>
                            </select>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ViewApplications;
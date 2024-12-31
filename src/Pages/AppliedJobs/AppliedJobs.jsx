import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import ReactLoading from 'react-loading';
import AppliedJobsCard from './AppliedJobsCard/AppliedJobsCard';
import axios from 'axios';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure/UseAxiosSecure';

const AppliedJobs = () => {
    const { user } = useAuth();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const axiosInstanceSecure = UseAxiosSecure();

    useEffect(() => {
        // fetch(`https://hire-sphere-server.vercel.app/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setAppliedJobs(data.data);
        //     })

        // axios.get(`https://hire-sphere-server.vercel.app/job-application?email=${user.email}`, { withCredentials: true })
        //     .then(res => setAppliedJobs(res.data.data))
        axiosInstanceSecure.get(`/job-application?email=${user.email}`)
        .then(res => setAppliedJobs(res.data.data))


    }, [user.email, axiosInstanceSecure])


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className='md:w-[80%] mx-auto mt-9'>
                <h2 className='text-3xl font-bold mb-5'>My Jobs Applications</h2>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-blue-600 animate__animated animate__fadeIn animate__slower">
                        <ReactLoading type="spin" color="red" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='md:w-[80%] mx-auto mt-9'>
            <h2 className='text-3xl font-bold mb-5'>My Jobs Applications</h2>
            <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
                {
                    appliedJobs.map(job => <AppliedJobsCard key={job._id} job={job}></AppliedJobsCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
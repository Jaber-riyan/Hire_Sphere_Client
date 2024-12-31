import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import { Helmet } from 'react-helmet';
import JobCard from '../JobCard/JobCard';

const MyPostedJobs = () => {
    const { user } = useAuth();
    const [postedJobs, setPostedJobs] = useState([]);
    useEffect(() => {
        fetch(`https://hire-sphere-server.vercel.app/posted-jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPostedJobs(data.data)
            })
    }, [user.email])
    return (
        <div className='md:w-[80%] mx-auto'>
            <Helmet><title>Posted Jobs | HireSphere </title></Helmet>
            <h1 className='text-3xl font-bold mb-5 mt-6'>Posted Jobs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mb-5 gap-5'>
                {
                    postedJobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;
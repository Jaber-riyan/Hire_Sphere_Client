import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';
import ReactLoading from 'react-loading';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://hire-sphere-server.vercel.app/jobs`);
                if (!res.ok) {
                    throw new Error(`Failed to fetch jobs: ${res.statusText}`);
                }
                const data = await res.json();
                setJobs(data.result);
                // console.log(data.result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);


    if (isLoading) {
        return (
            <>
                <h2 className='text-4xl font-bold mb-5'>All Jobs</h2>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-blue-600 animate__animated animate__fadeIn animate__slower">
                        <ReactLoading type="spin" color="red" />
                    </div>
                </div>
            </>
        );
    }

    return (
        <div>
            {loading ? (
                <p className="text-center text-gray-600">Loading jobs...</p>
            ) : error ? (
                <p className="text-center text-red-600">Error: {error}</p>
            ) : (
                <>
                    <h2 className='text-4xl font-bold mb-5'>All Jobs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-7">
                        {jobs.map((job) => (
                            <JobCard key={job._id} job={job} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default HotJobs;

import React from 'react';
import Banner from './Banner';
import BrowseByCategory from '../BrowseByCategory/BrowseByCategory';
import HotJobs from './HotJobs';

const HomeLayout = () => {
    return (
        <div>
            <section className='bg-[#c0d3f0] rounded-xl'>
                <Banner></Banner>
            </section>
            <section className='md:w-[90%] mx-auto mt-10'>
                <HotJobs></HotJobs>
            </section>
            <section>
                <BrowseByCategory></BrowseByCategory>
            </section>
        </div>
    );
};

export default HomeLayout;
import React from 'react';
import AllCollege from '../AllCollege/AllCollege';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Research from '../Research/Research';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <AllCollege></AllCollege>
            <Gallery></Gallery>
            <Research></Research>
        </div>
    );
};

export default Home;
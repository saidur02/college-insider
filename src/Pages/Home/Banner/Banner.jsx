import React from 'react';
import bannerImg from '../../../assets/banner.jpeg'

const Banner = () => {
    return (
        <>
     <div className='text-right p-4'>
     <input type="text" placeholder="Search here ..." className="input input-bordered input-accent justify-end w-full max-w-xs" />
     <button className="btn btn-success ms-2">Search</button>
     </div>
        <div className=" bg-black min-h-screen mx-auto  container">
            <div className="bg-cover bg-center h-screen w-screen opacity-70  bg-[url(https://i.ibb.co/mvjf86g/photo-1562774053-701939374585.jpg)] 
              bg-no-repeat">
                <div className='justify-center text-center '>
                    <h2 className='text-7xl text-rose-600 pt-64'> Come Here For Build Your Future</h2>
                </div>
            </div>
        </div>
        </>
    );
};

export default Banner;
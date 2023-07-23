import React from 'react';
import img1 from '../../../assets/images (1).jpeg'
import img2 from '../../../assets/images.jpeg'

const Gallery = () => {
    return (
        <>
            <h2 className='text-5xl text-center p-4 font-bold'>Gallery Section</h2>
            <div className='grid grid-cols-4 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={img1} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={img2} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={img1} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={img2} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={img1} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={img2} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={img1} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={img2} alt="Shoes" /></figure>
                </div>
            </div>
        </>
    );
};

export default Gallery;
import React, { useEffect, useState } from 'react';

const Colleges = () => {
    const [colleges, setAllColleges] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setAllColleges(data)
            })
    }, [])
    return (
        <>

            <div className='grid md:grid-cols-3 gap-5'>
                {
                    colleges.map(college =>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={college.picture} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{college.name}</h2>
                                <p>Rating {college.rating}</p>
                                <p></p>
                                <p>Admission Date {college.admission_date}</p>
                                <p>Number Number : {college.research_history}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </>
    );
};

export default Colleges;
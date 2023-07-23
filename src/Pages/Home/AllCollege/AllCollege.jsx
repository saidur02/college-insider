import React, { useEffect, useState } from 'react';

const AllCollege = () => {
    const [college, setCollege] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data.picture)
                setCollege(data)
            })
    }, [])

    return (
       <>
       <h2 className='text-5xl text-center p-4 font-bold'>College Section</h2>
        <div className='grid md:grid-cols-3 gap-5'>
           {
            college.map(college => <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={college.picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{college.name}</h2>
                <p>{college.admission_date}</p>
                <p></p>
                <p>{college.admission_date}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>)
           }
        </div>
       </>
    );
};

export default AllCollege;
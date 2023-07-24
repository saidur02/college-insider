import React, { useEffect, useState } from 'react';
import AdmissionTable from './AdmissionTable';

const Admission = () => {

    const [colleges, setAllColleges] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setAllColleges(data)
            })
    }, [])

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Admission Button</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        colleges.map(college => <AdmissionTable
                        key={college._id}
                        college={college}
                        ></AdmissionTable>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Admission;
import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionTable = ({college}) => {
    return (
        <tr>
            
            <td>
                <div className="flex items-center text-xl space-x-3">
                    <div>
                        <div className="font-bold">{college.name}</div>
                    </div>
                </div>
            </td>
           
            <th>
               <Link to='/admissionform'> <button  className="btn btn-primary">Admission Now</button></Link>
            </th>
        </tr>
    );
};

export default AdmissionTable;
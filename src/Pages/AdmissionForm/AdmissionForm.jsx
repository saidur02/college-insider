

const AdmissionForm = () => {

    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const number = form.number.value;
        const birth = form.birth.value;
        const address = form.address.value;
       const addStudent = {
        studentName: name,
        email,
        photo,
        subject,
        number,
        birth,address
       }
       fetch('https://baby-server.vercel.app/addtoy',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addToy)
       })
       .then(res =>res.json())
       .then(data => {
        console.log(data)
       })
    }

    return (
        <div>
            <h2 className='text-center text-3xl font-semibold'>Please Fill The Admission Form</h2>

            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Picture URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Student Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Student Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" name='subject' placeholder='Subject' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder='Email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='number' placeholder='Phone Number' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date Of Birth</span>
                            </label>
                            <input type="text" name='birth' placeholder='Date Of Birth' className="input input-bordered" />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address' placeholder="Address" className="input input-bordered" />
                        </div>
                        
                         </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AdmissionForm;
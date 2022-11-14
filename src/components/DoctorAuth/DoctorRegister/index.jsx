import React from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorRegistration = () => {

    const navigate = useNavigate()
    const onRegister = ()=>{
      navigate("/doctorlogin")
    }
  return (
    <section className='doctor_register'>
    <div className='container'>
        
        <div className='row d-flex justify-content-center my-4'>
               <div className="col-lg-9">
              <div className="card  shadow">
                <div className="card-header" style={{background:"0"}}> <h4 ><span style={{color:"#EE6F1B"}}>Doctor</span> Registration</h4>  </div>
                 <div className="card-body p-5">
                
             <form className='row g-3'>
                    <div className="col-md-12">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="fname" placeholder='Enter Your First Name' aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lname" placeholder='Enter Your Last Name' aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder='Enter Your Email ' id="email"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder='Enter Your Password' id="password"/>
                    </div>
                    <div className='col-md-12'>
                    <label className='form-label' htmlFor='gender' placeholder='Enter Your Gender'>
                      Specialization
                    </label>
                    <select className='form-select' id='doctorSpecialization'>
                      <option selected>Select Specialist</option>
                      <option value='1'>Ent</option>
                      <option value='2'>Cardiologist</option>
                      <option value='3'>Physcologist</option>
                      <option value='4'>Dermotologist</option>
                      <option value='5'>Gynocologist</option>
                  
                    </select>
                  </div>
                    <div className="col-md-12">
                        <label htmlFor="exp" className="form-label">Experience</label>
                        <input type="number" className="form-control" placeholder='Enter Your Experience' id="exp"/>
                    </div>
                    <div className='col-md-12'>
                    <label className='form-label' htmlFor='gender' placeholder='Enter Your Gender'>
                      Gender
                    </label>
                    <select className='form-select' id='doctorSpecialization'>
                      <option selected>Select Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='others'>Others</option>
                      
                    </select>
                  </div>

                    <div className="col-md-12">
                        <label htmlFor="mobileno" className="form-label">Mobile No</label>
                        <input type="number" className="form-control" placeholder='Enter Your Mobile Number' id="mobile"/>
                    </div>
                    <div className="col-md-12">

                        <label htmlFor="address" className="form-label"> Address</label>
                        <textarea class="form-control" placeholder="Enter Your Address"   id="address"></textarea>
                
                    </div>
                  

                  
                     <div className='col-6 d-grid mx-auto mt-5 mb-3'>
                    <button 
                     type="submit"
                      className="btn text-white"
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                      onClick={onRegister}>Register</button>
                    </div>
              </form>

            </div>
              </div>
              </div>
        </div>

    </div>
    </section>
  )
}

export default DoctorRegistration
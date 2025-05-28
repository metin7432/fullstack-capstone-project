import React, {useState} from 'react';

import './RegisterPage.css';

function RegisterPage(){
    

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
        const handleRegister = async () => {
            console.log("Register invoked")
        }

        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="register-card p-4 border rounded">
                            <h2 className="text-center mb-4 font-weight-bold">Register</h2>
                         <input type='text' className='form-control' placeholder='Enter your Firstname' id='firstName' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                         <input type='text' className='form-control' placeholder='Enter your Lastname' id='lastName'  onChange={(e) => setLastName(e.target.value)} value={lastName}  />
                         <input type='text' className='form-control' placeholder='Enter your email' id='email' onChange={(e) => setEmail(e.target.value)}  value={email} />
                         <input type='text' className='form-control' placeholder='Enter your password' id='password'  onChange={(e) => setPassword(e.target.value)} value={password} />
                         <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>Register</button>
                       <p className="mt-4 text-center">
                            Already a member? <a href="/app/login" className="text-primary">Login</a>
                        </p>
                         </div>
                    </div>
                </div>
            </div>
         )//end of return
}


export default RegisterPage;


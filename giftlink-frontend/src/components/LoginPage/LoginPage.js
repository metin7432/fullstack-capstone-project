import React, { use, useState } from 'react';
import './LoginPage.css';

function LoginPage() {

   const [email, setEmail] =useState('')
   const [password, setPassword] =useState('')

    function handleLogin(e){
        e.preventDefault();
        console.log('Handlelogin');
    }

        return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-card p-4 border rounded">
              <h2 className="text-center mb-4 font-weight-bold">Login</h2>

              <input type='text' id='email' className='form-control' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} value={email}/>  
              <input type='text' id='password' className='form-control' placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} value={email}/>  
              <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</button>
                <p className="mt-4 text-center">
                    New here? <a href="/app/register" className="text-primary">Register Here</a>
                </p>

            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginPage;
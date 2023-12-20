import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
  const changeInputHandle = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }
  return (
    <section className="login">
    <div className="container login-container form-container">
      <h2>Login Up</h2>
      <form action="" className="form register-form">
        <p className='form-message'>This is invalid message</p>
    
        <input
          type="email"
          placeholder='Email'
          name='email'
          value={userData.email}
          onChange={changeInputHandle}
        />

        <input
          type="password"
          placeholder='Password'
          name='password'
          value={userData.password}
          onChange={changeInputHandle}
        />

        
        <button type='submit' className="btn btn-primary">Register</button>
      </form>

      <small>Not have any Account ? <Link to={'/register'}>Sign Up</Link></small>
    </div>
  </section>
  )
}

export default Login
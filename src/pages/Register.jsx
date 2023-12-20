import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  const changeInputHandle = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }
  return (
    <section className="register">
      <div className="container register-container form-container">
        <h2>Sign Up</h2>
        <form action="" className="form register-form">
          <p className='form-message'>This is invalid message</p>
          <input
            type="text"
            placeholder='Full Name'
            name='name'
            value={userData.name}
            onChange={changeInputHandle}
          />

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

          <input
            type="password"
            placeholder='Confirm Password'
            name='password2'
            value={userData.password2}
            onChange={changeInputHandle}
          />

          <button type='submit' className="btn btn-primary">Register</button>
        </form>

        <small>Allready have an account ? <Link to={'/login'}>Sign In</Link></small>
      </div>
    </section>
  )
}

export default Register
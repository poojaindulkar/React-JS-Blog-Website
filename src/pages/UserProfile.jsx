import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pfofileImage from '../assets/a1.jpg'
import { FaCheckCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const UserProfile = () => {
  const [profileImage, setProfileImage] = useState('')
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [currentPassword, setCurrentPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmNewPassword, setConfirmNewPassword] = useState()

  
  return (
    <section className="profile">
      <div className="container profile-container">
        <Link to={'/myposts/id'}>My Posts</Link>

        <div className="profile-detail">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={pfofileImage} alt="" />
            </div>


            {/*Profile Form */}
            <form action="" className="profile-image-form">
              <input
                type="file"
                name='profile-image'
                id='profile-image'
                accept='png,jpg,jpeg'
                onChange={e => setProfileImage(e.target.files[0])} />
              {/* <label htmlFor="profile-image">
                <FaEdit />
              </label> */}
            </form>

            <button className="profile-image-button">
              <FaCheckCircle />
            </button>

          </div>
          <h2>Pooja Indulkar</h2>

          {/*Profile Data Form */}
          <form action="" className="form profile-data-form">
            <p className='form-message'>This is invalid message</p>


            <input
              type="name"
              placeholder='Full Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder='Current Password'
              name='currentPassword'
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder='New Password'
              name='newPassword'
              value={newPassword}
              onChange={(e)=>setNewPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder='Confirm New Password'
              name='confirmNewPassword'
              value={confirmNewPassword}
              onChange={(e)=>setConfirmNewPassword(e.target.value)}
            />


            <button type='submit' className="btn btn-primary">Update Profile</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
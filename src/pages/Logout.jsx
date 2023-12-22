import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <section>
        <div className="error-center">
            <h1>Log Out</h1>
            <Link to={'/'} className='btn btn-primary'>Go Back Home</Link>
        </div>
    </section>
  )
}

export default Logout
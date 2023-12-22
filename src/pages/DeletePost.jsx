import React from 'react'
import { Link } from 'react-router-dom'

const DeletePost = () => {
  return (
    <section>
        <div className="error-center">
            <h1>Delete</h1>
            <Link to={'/'} className='btn btn-primary'>Go Back Home</Link>
        </div>
    </section>
  )
}

export default DeletePost
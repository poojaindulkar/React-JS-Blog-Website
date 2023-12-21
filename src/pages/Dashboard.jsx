import React, { useState } from 'react'
import { DummyPosts } from '../data/data'
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const [posts, setPosts] = useState(DummyPosts);
  return (
    <section className="dashboard">
        {posts.length > 0 ? <div className="container dashboard-container">
          {
            posts.map(({ id, Image, authorId, category, title, des }, index) => {
              return <article key={index} className="dashboard-post">
                <div className="dashboard-post-info">
                  <div className="dashboard-post-image">
                    <img src={Image} alt="" />
                  </div>
                  <h5>{title}</h5>
                </div>
                <div className="dashboard-posts-action">
                  <Link to={`/posts/${authorId}`} className='btn-V btn btn-sm'>View</Link>
                  <Link to={`/posts/${authorId}/edit`} className='btn btn-sm btn-primary'>Edit</Link>
                  <Link to={`/posts/${authorId}/delete`} className='btn btn-sm btn-danger'>Delete</Link>
                </div>
              </article>
            })
          }
        </div> : <h2 className='error-center'>You have not made any posts.</h2>}
    </section>
  )
}

export default Dashboard
import React, { useState } from 'react'
import { DummyPosts } from '../data/data'

const Dashboard = () => {
  const [posts, setPosts] = useState(DummyPosts);
  return (
    <section className="dashboard">
      <div className="container dashboard-container">
        {posts.length > 0 ? <div className="container posts-container">
          {
            posts.map(({ id, Image, authorId, category, title, des }, index) =>
              return 
            )
          }
        </div> : <h2 className='error-center'>You have not made any posts.</h2>}
      </div>
    </section>
  )
}

export default Dashboard
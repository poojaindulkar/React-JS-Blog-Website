
import { useState,React } from 'react'
import { DummyPosts } from '../data/data'
import PostItem from './PostItem'
import HeadPost from './HeadPost'
const Posts = () => {
    const [posts,setPosts]=useState(DummyPosts)
  return (
    <section className='posts'>
        <div className="head-post-aria">
            <HeadPost/>
        </div>
       {posts.length >0 ? <div className="container posts-container">
        {
            posts.map(({id,Image,authorId,category,title,des},index)=>
            <PostItem key={index} Image={Image} category={category} authorId={authorId}
            title={title} des={des} postID={id}/>)
        }
        </div>: <h2 className='error-center'>No posts found</h2>}
    </section>
  )
}

export default Posts
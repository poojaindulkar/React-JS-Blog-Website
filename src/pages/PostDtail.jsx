import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import postDtailImage from '../assets/1.jpg'
const PostDtail = () => {
  return (
    <section>
      <div className="container PostDetail-container">
        <div className="postdtail-top">
          <PostAuthor/>
          <div className="postdtail-buttons">
            
              <Link to={'posts/werwer/edit'} className="btn btn-sm btn-primary">
                Edit
              </Link>
              <Link to={'posts/werwer/delete'} className="btn btn-sm btn-danger">
                Delete
              </Link>
            
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="postdetail-image">
          <img src={postDtailImage} alt="" />
        </div>
        <div className="postdtail-para">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Deserunt et, commodi vitae beatae perferendis accusantium 
          ipsum laborum fuga quas maiores explicabo non ut deleniti 
          nam tenetur minus sint modi nihil.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Deserunt et, commodi vitae beatae perferendis accusantium 
          ipsum laborum fuga quas maiores explicabo non ut deleniti 
          nam tenetur minus sint modi nihil.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Deserunt et, commodi vitae beatae perferendis accusantium 
          ipsum laborum fuga quas maiores explicabo non ut deleniti 
          nam tenetur minus sint modi nihil.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Deserunt et, commodi vitae beatae perferendis accusantium 
          ipsum laborum fuga quas maiores explicabo non ut deleniti 
          nam tenetur minus sint modi nihil.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Deserunt et, commodi vitae beatae perferendis accusantium 
          ipsum laborum fuga quas maiores explicabo non ut deleniti 
          nam tenetur minus sint modi nihil.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Deserunt et, commodi vitae beatae perferendis accusantium 
          ipsum laborum fuga quas maiores explicabo non ut deleniti 
          nam tenetur minus sint modi nihil.
        </p>
        </div>
      </div>
    </section>
  )
}

export default PostDtail
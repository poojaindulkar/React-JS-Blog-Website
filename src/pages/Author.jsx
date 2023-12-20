import React from 'react'
import { useState } from 'react'
import DummyAuthor from '../data/data'
const Author=()=>{
    const[author,setAuthor]=useState(DummyAuthor);
    return (
        <section className='author'>
            <div className="container author-container">
                
            </div>
        </section>
    )
}

export default Author
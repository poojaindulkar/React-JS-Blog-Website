import React from 'react'

//Router
import {BrowserRouter,Route,Routes} from "react-router-dom"

//Components
import Header from '../components/Header'
import Footer from '../components/Footer'

//Pages
import Author from '../pages/Author'
import AuthorPosts from '../pages/AuthorPosts'
import CategoryPosts from '../pages/CategoryPosts'
import CreatePosts from '../pages/CreatePosts'
import Dashboard from '../pages/Dashboard'
import DeletePost from '../pages/DeletePost'
import EditPost from '../pages/EditPost'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import PostDtail from '../pages/PostDtail'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'


const Router = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts/user/:id' element={<AuthorPosts/>}/>
          <Route path='/author' element={<Author/>}/>
          <Route path='/posts/categories/:category' element={<CategoryPosts/>}/>
          <Route path='/create' element={<CreatePosts/>}/>
          <Route path='/myposts/:id' element={<Dashboard/>}/>
          {/* <Route path='/' element={<DeletePost/>}/> */}
          <Route path='/posts/:id/edit' element={<EditPost/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/posts/:id' element={<PostDtail/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile/:id' element={<UserProfile/>}/>



        </Routes>
      <Footer/>
    </BrowserRouter>
    
    
    </>
  )
}

export default Router
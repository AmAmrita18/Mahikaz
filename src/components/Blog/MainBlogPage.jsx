import React from 'react'
import Header from '../Header'
import MainBlogHero from './MainBlogHero'
import BlogDetails from './BlogDetails'

const MainBlogPage = () => {
  return (
    <div className='w-full'>
        <MainBlogHero/>
       <BlogDetails/>
    </div>
  )
}

export default MainBlogPage
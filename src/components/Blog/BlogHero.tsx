import React from 'react'
import BlogArticle from './BlogArticle'
import BlogRightSection from './BlogRightSection'
const BlogHero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-8 md:p-28 p-5'>
      <BlogArticle />
      <BlogRightSection />
    </div>
  )
}

export default BlogHero

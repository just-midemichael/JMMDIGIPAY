import React from 'react'

const Blog = () => {
  const docTitle = () => {
    document.title = 'Blog'
  }
  docTitle()

  return (
    <section className='body'>Blog</section>
  )
}

export default Blog
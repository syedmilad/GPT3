import React from 'react'
import { Article } from '../../components'
import "./Blog.css"
import { blog01, blog02, blog03, blog04 } from '../../assets'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'> A lot is happening, <br />
          We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupAA'>
          <Article imgURL={blog01} date="Sep, 12 2025" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgURL={blog02} date="Sep, 12 2025" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgURL={blog03} date="Sep, 12 2025" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgURL={blog04} date="Sep, 12 2025" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgURL={blog04} date="Sep, 12 2025" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog
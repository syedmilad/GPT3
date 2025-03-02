import React from 'react'
import "./Article.css"

const Article = ({imgURL,date,title}) => {
  return (
    <div className='gpt3__blog-container_article'>
        <div className='gpt3__blog-container-article_image'>
            <img src={imgURL} alt="imgURL" />
        </div>
        <div className='gpt3__blog-container-article_content'>
          <div>
            <p>{date}</p>
            <h1>{title}</h1>
          </div>
          <p>Read Full Artilce</p>
        </div>
    </div>
  )
}

export default Article
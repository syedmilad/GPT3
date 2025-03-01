import React from 'react'
import { google,atlassian,shopify,slack,dropbox } from '../../assets'
import "./Brand.css"
const Brand = () => {
  return (
    <div className='section__padding gpt3__brand'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  )
}

export default Brand
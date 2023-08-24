import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Socialmedia = () => {
  return (
    <div className='top_icons'>
        <a href="https://linkdin.com" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
              <a href="https://github.com" rel="noopener noreferrer">
                <BsInstagram />
              </a>
              <a href="https://twitter.com" rel="noopener noreferrer">
                <BsTwitter />
              </a>
              <a href="https://youtube.com" rel="noopener noreferrer">
                <BsYoutube />
              </a>
    </div>
  )
}

export default Socialmedia
import React from "react";
import {
  FaLinkedin as LinkedIn,
  FaGithub as Github,
  FaEnvelope as Mail,
} from "react-icons/fa";
import image from '../images/my-image.jpg';



export default function info() {
  return (
    <div className="container">

      <p className="html-tag">&lt;html&gt;</p>

      <div className="body-tag">&lt;body&gt;</div>

      <div className="h1-tag">&lt;h1&gt;</div>
      <div className="title-container">
        <div className="title">
          <span style={{ color: "white" }}>Hello, I'm</span> Miri. <br />
          <span style={{ color: "white", fontSize: '40px' }}>Full Stack Developer</span>

        </div>
        <img src={image} className="my-image"></img>
      </div>

      <div className="h1-tag"> &lt;/h1&gt;</div>

      <div className="about">
        My professional path has taken many twists and turns — from graduating B.A in accounting
        and starting my internship as an accountant in Israel,
        to studying English in Las Vegas,
        to eventually finding my real passion as a developer in Vancouver. <br />
        As a Web/App Developer, I enjoy solving intriguing problems,
        using my obsessive attention to details and
        my desire to learn and expand my knowledge and skills. <br />
        I'm open for new experiences so if you're intrested in getting to know me more,

          <a className="info-link" href="mailto://mirimarkovitzbl@gmail.com">
          contact me here!
        </a>
      </div>

      <div className="body-tag">&lt;/body&gt;</div>
      <div className="html-tag">&lt;/html&gt;</div>


      <div className="social-container">
        <a className="social-link" href="https://github.com/mirimar8" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a className="social-link" href="https://www.linkedin.com/in/miri-markovitz/" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
        <a className="social-link" href="mailto://mirimarkovitzbl@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail />
        </a>
      </div>


    </div>
  )
}

import React from "react";
import {
  FaLinkedin as LinkedIn,
  FaGithub as Github,
  FaEnvelope as Mail,
} from "react-icons/fa";


export default function info() {
  return (
    <div className="container">
      <p className="html-tag">&lt;html&gt;</p>

      <div className="body-tag">&lt;body&gt;</div>

      <div className="h1-tag">&lt;h1&gt;</div>
      <div className="title" style={{ color: "#FF8A00", marginLeft: '50px', fontSize: '55px' }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        Miri. <br />
        <span style={{ color: "white" }}>Full Stack Developer</span>

      </div>
      <div className="h1-tag"> &lt;/h1&gt;</div>

      <div className="about">
        My professional path has taken many twists and turns — from graduating B.A in accounting
        and starting my internship as an accountant in Israel,
        to studying English in Las Vegas,
        to eventually finding my real passion as a developer in Vancouver. <br />
        As a web/app developer, I enjoy solving intriguing problems,
        using my obsessive attention to details and
        my desire to learn and expand my knowledge and skills. <br />
        I'm open for new experiences so if you're intrested in getting to know me more,
        contact me here:

      </div>

      <div className="body-tag">&lt;/body&gt;</div>
      <div className="html-tag">&lt;/html&gt;</div>

      <div className="social-container">
        <a className="social" href="https://github.com/mirimar8">
          <Github />
        </a>
        <a className="social" href="https://www.linkedin.com/in/miri-markovitz/">
          <LinkedIn />
        </a>
        <a className="social" href="mailto://mirimarkovitzbl@gmail.com">
          <Mail />
        </a>
      </div>


    </div>
  )
}

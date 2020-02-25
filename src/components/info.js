import React from "react"

import {
  FaLinkedin as LinkedIn,
  FaGithub as Github,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="h1 code mt-4 mb-3">&lt;html&gt;</div>

      <div className="h1 code mt-4 mb-3">&lt;body&gt;</div>

      <div className="h1 code mt-4 mb-3">&lt;h1&gt;</div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        Miri.
      </div>
      <div className="h1 code mt-2 mb-3"> &lt;/h1&gt;</div>

      <div className="text-muted mx-5 my-4 h3 text-justify info">
        Full Stack Developer
        <br />
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
      <div className="h1 mt-5">
        <div className="h1 code mt-2 mb-3">&lt;/body&gt;</div>
        <div className="h1 code mt-2 mb-3">&lt;/html&gt;</div>

        <a className="mr-5 icon" href="https://github.com/mirimar8">
          <Github />
        </a>
        <a className="mr-5 icon" href="https://www.linkedin.com/in/miri-markovitz/">
          <LinkedIn />
        </a>
        <a className="mr-5 icon" href="mailto://mirimarkovitzbl@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}

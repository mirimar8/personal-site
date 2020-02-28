import React from "react"
import Intent from "./link"
import Pdf from '../images/Resume.pdf';


export default function Appbar() {
  return (
    <div className="container my-3">
      <ul className="nav justify-content-center">
        <li className="nav-item mx-4">
          <Intent to="/">Home</Intent>
        </li>
        <li className="nav-item mx-4">
          <Intent to="/projects">Projects</Intent>
        </li>
        <li className="nav-item mx-4">
          <a href={Pdf} target="_blank" rel="noopener noreferrer" className="resume-link">Resume</a>
        </li>
      </ul>

    </div>
  )
}

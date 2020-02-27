import React from "react"
import Intent from "./link"
import { Link } from "gatsby"


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
        {/* <Link to="../images/Resume">resume</Link> */}
      </ul>
    </div>
  )
}

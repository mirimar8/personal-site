import React from "react"
import Img from "gatsby-image"
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';

function card(props) {
  const { cardTitle, cardSubtitle, GHlink, WSlink, cardImage } = props
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text">{cardSubtitle}</p>
          <Img
            className="selfie"
            fluid={cardImage}
          />
          <a href={GHlink} className="card-link">
            <FaGithub />Source
          </a>
          <a href={WSlink} className="card-link">
            <FaExternalLinkAlt />Live
          </a>

        </div>
      </div>
    </div>
  )
}

export default card

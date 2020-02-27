import React from "react"
import Img from "gatsby-image"
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';

function card(props) {
  const { cardTitle, cardSubtitle, GHlink, WSlink, cardImage, cardTech } = props
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text">{cardSubtitle}</p>
          <Img
            className="card-image"
            fluid={cardImage}
          />
          <p className="card-tech">{cardTech}</p>

          <div className="links-container">
            <button className="link-button">
              <a href={GHlink} className="card-link">
                <FaGithub className="icon" />Source
              </a>
            </button>
            {WSlink ? (
              <button className="link-button">
                <a href={WSlink} className="card-link">
                  <FaExternalLinkAlt className="icon" />Live
              </a></button>
            ) : (<a href={WSlink} className="card-link"></a>)}
          </div>

        </div>
      </div>
    </div>
  )
}

export default card

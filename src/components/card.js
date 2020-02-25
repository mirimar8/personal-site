import React from "react"
import Img from "gatsby-image"


function card(props) {
  const { cardTitle, cardSubtitle, link, cardImage } = props
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
          <a href={link} className="card-link">
            See
          </a>

        </div>
      </div>
    </div>
  )
}

export default card

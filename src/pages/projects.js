import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { graphql } from "gatsby"
import Card from "../components/card"
import { Helmet } from "react-helmet"


function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges

  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Miri</title>
      </Helmet>
      <div className="row">
        {projectList.map(({ node }) => {
          return (

            <Card
              cardTitle={node.title}
              cardSubtitle={node.subtitle}
              GHlink={node.link}
              WSlink={node.WSlink}
              cardImage={node.image.childImageSharp.fluid}
              key={node.id}
            />



          )
        })}
      </div>
    </div>
  )
}

export default Projects

export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          WSlink
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id
        }
      }
    }
  }
`

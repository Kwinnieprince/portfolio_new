import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const NodeRedImg = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "nodeRedFrontend.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
  }
  
  export default NodeRedImg
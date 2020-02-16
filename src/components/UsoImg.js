import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const PicrossImg = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "website_uso.png" }) {
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
  
  export default PicrossImg
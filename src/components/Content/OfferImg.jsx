import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "offer-bg.png" }) {
            childImageSharp {
              fluid(maxWidth: 1440, maxHeight: 767) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        if (!data?.placeholderImage?.childImageSharp?.fluid) {
          return <div>Picture not found</div>
        }

        return (
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            className="absolute inset-0 opacity-80"
          />
        )
      }}
    />
  )
}

export default HeroImage

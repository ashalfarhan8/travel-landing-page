import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          sliderBg: file(relativePath: { eq: "hero-img.png" }) {
            childImageSharp {
              fluid(maxWidth: 580, maxHeight: 757) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      `}
      render={data => {
        if (!data?.sliderBg?.childImageSharp?.fluid) {
          return <div>Picture not found</div>
        }

        return (
          <>
            <Img
              fluid={data.sliderBg.childImageSharp.fluid}
              className="absolute inset-0"
              alt="fluid img"
            />
          </>
        )
      }}
    />
  )
}

export default HeroImage

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
              fixed(width: 580, height: 757) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        if (!data?.sliderBg?.childImageSharp?.fixed) {
          return <div>Picture not found</div>
        }

        return (
          <>
            <Img
              fixed={data.sliderBg.childImageSharp.fixed}
              className="absolute inset-0"
              alt="fixed img"
            />
          </>
        )
      }}
    />
  )
}

export default HeroImage

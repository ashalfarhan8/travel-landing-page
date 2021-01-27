import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GalleryGrid = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          landscape: allFile(
            filter: {
              relativePath: { regex: "/landscape/" }
              relativeDirectory: { eq: "testimonial" }
            }
          ) {
            nodes {
              childImageSharp {
                fluid(maxWidth: 750, maxHeight: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
          portrait: allFile(
            filter: {
              relativePath: { regex: "/portrait/" }
              relativeDirectory: { eq: "testimonial" }
            }
          ) {
            nodes {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
          gallery: allFile(
            filter: { relativeDirectory: { eq: "testimonial" } }
          ) {
            nodes {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      `}
      render={({ landscape, portrait }) => (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-items-stretch absolute left-10 right-0 top-48">
          <Img
            fluid={landscape.nodes[2].childImageSharp.fluid}
            className="h-full w-full self-end"
          />
          <Img
            fluid={portrait.nodes[1].childImageSharp.fluid}
            className="row-span-2"
          />
          <Img
            fluid={portrait.nodes[0].childImageSharp.fluid}
            className="w-full h-full"
          />
          <Img
            fluid={landscape.nodes[1].childImageSharp.fluid}
            className="w-full h-full"
          />
          <Img
            fluid={landscape.nodes[0].childImageSharp.fluid}
            className="w-full h-full"
          />
        </div>
      )}
    />
  )
}

export default GalleryGrid

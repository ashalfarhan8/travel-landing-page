import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "offer-bg.png" }) {
        childImageSharp {
          fixed(width: 1440, height: 767) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed}
      className="absolute inset-0 opacity-80"
    />
  )
}

export default HeroImage

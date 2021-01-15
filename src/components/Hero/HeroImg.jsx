import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero-img.png" }) {
        childImageSharp {
          fixed(width: 580, height: 757) {
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
      className="absolute inset-0"
    />
  )
}

export default HeroImage

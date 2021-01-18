import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Main/layout"
import SEO from "../components/Main/seo"
import GalleryGrid from "../components/Content/GalleryGrid"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <GalleryGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

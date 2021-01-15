import React from "react"

import Layout from "../components/Main/layout"
import SEO from "../components/Main/seo"
import Hero from "../components/Hero/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage

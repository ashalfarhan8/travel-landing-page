import React from "react"

import Layout from "../components/Main/layout"
import SEO from "../components/Main/seo"
import Hero from "../components/Hero/Hero"
import Content from "../components/Content/Content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Content />
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Main/layout"
import SEO from "../components/Main/seo"
import Hero2 from "../components/Hero/Hero2"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Hero2 />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PrivacyPolicy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="container">
        <h1>404: Not Found</h1>
        <p>YArretez! It looks like the place we are looking for does exist... let's go back</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Bonaparte | Privacy Policy" />

export default PrivacyPolicy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
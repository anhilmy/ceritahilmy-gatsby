import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>My Wordpress Blog</h1>
    {data.allWpPost.nodes.map(node => (
      <div key={node.slug}>
        <Link to={node.slug}>
          <h2>{node.title}</h2>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
      query {
        allWpPost(sort: { fields: [date]}){
          nodes {
            title
            excerpt
            slug
          }
        }
      }
`
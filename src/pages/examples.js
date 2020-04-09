import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <div>
      <Layout>
        <p>Hello from examples page</p>
        <Header />
        <HeaderStatic />
        <h5>author: {author}</h5>
      </Layout>
    </div>
  )
}
export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          name
          age
        }
      }
    }
  }
`
export default examples

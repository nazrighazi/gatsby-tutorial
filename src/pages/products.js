import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styles from "../components/products.module.css"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}></Image>
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>More detail</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default ComponentName

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
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
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>Title : {data.site.siteMetadata.title}</h1>
      <h1>Name : {data.site.siteMetadata.person.name}</h1> */}

      <h2>Title: {title}</h2>
      <h2> Name: {name}</h2>
    </div>
  )
}

export default Header

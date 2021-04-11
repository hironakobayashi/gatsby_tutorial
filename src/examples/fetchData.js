import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complesData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h2>Name: {site.info.person.name}</h2> */}
      <h2>site title is: {title}</h2>
    </div>
  )
}

export default FetchData

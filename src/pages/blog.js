import React from "react"
import { Link, graphql } from "gatsby"
import "../styles/app.css"

const Index = ({data}) => {
    return (
        <ul>
        {data.allPrismicPost.edges.map(document => (
        <li key={document.node.uid}>
          <h2>
            <Link to={`/${document.node.uid}`}>{document.node.data.title.text}</Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: document.node.data.content.html.substring(0, 500).concat("...")}} />                 
        </li>
        
        ))}
        </ul>
    )
}

export default Index

export const blogQuery = graphql`  
  query BlogQuery {
    allPrismicPost {
        edges {
          node {
            uid
            data {
              content {
                html
              }
              title {
                text
              }
            }
          }
        }
      }
  }
`
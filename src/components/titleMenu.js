import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import "../styles/components/titleMenu.scss"

const TitleMenu = () => (
  <StaticQuery
    query={graphql`
      query titleMenuQuery {
        allPrismicHomepage {
          edges {
            node {
              id
              data {
                homepage_banner {
                  title {
                    text
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.allPrismicHomepage.edges.map(document =>
          document.node.data.homepage_banner.map(doc => (
            <h2 key={doc.title.text}>
              <Link to="/">{doc.title.text}</Link>
            </h2>
          ))
        )}
      </>
    )}
  />
)

export default TitleMenu

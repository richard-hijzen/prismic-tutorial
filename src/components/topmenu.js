import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

const TopMenu = () => (
  <StaticQuery
    query={graphql`
      query topMenuQuery {
        allPrismicTopmenu {
          edges {
            node {
              id
              data {
                menu_links {
                  label {
                    text
                  }
                  link {
                    url
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
        {data.allPrismicTopmenu.edges.map(document => (
          <ul key={document.node.id} className="nav-items">
            {document.node.data.menu_links.map(list => (
              <li key={list.link.url} className="nav-item">
                <Link to={list.link.url} className="nav-link">
                  {list.label.text}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </>
    )}
  />
)

export default TopMenu

import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import "./topmenu.css"


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
                  slug
                }
              }
            }
          }
        }
      }
      }
    `}
    render={data => (
        <div id="top-menu">
        {data.allPrismicTopmenu.edges.map(document => (
            <ul key={document.node.id}>
                {document.node.data.menu_links.map(list => (
                    <li key={list.link.slug}>  
                    <Link to={`/${list.link.slug}`}>{list.label.text}</Link>                 
                    </li>
                ))}
                
            </ul>
        ))}
        </div>
    )}
  />

)

export default TopMenu


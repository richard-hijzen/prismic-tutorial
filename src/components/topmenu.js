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
            data {
              menu_links {
                label {
                  text
                }
                link {
                  uid
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
            <ul>
                {document.node.data.menu_links.map(list => (
                    <li key={list.link.uid}>  
                    <Link to={`/${list.link.uid}`}>{list.label.text}</Link>                 
                    </li>
                ))}
                
            </ul>
        ))}
        </div>
    )}
  />

)

export default TopMenu


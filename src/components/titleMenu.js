import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import TopMenu from "./topmenu"
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
            <div id="title-menu">
                {data.allPrismicHomepage.edges.map(document => (
                    document.node.data.homepage_banner.map(doc => (
                        <h2 key={doc.title.text}><Link to="/">{doc.title.text}</Link></h2>   
                    ))
                ))}
                <TopMenu />
            </div>
        )}
      />
    
    )
    
    export default TitleMenu
    
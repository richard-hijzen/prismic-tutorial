import React from "react"
import { Link, graphql } from "gatsby"
import TitleMenu from "../components/titleMenu"
import Footer from "../components/footer"

import "../styles/app.scss"

const Index = ({data}) => {
    return (
        <div>
            {data.allPrismicHomepage.edges.map(document => (
                <div>
                    {document.node.data.homepage_banner.map(doc => (
                       
                        <header
                          style={{
                            backgroundImage: `url(${doc.image.url})`,
                            backgroundPosition: `center`,
                            backgroundSize: `cover`,
                            backgroundRepeat: `no-repeat`,
                            maxWidth: `100%`,
                            height: 400,
                            color: `#fff`,
                          }}
                        >
                        <div id="header-parts">
                            <TitleMenu />
                            <div id="intro">
                              <p id="header-text">{doc.tagline.text}</p>
                                <Link id="header-button" to={`/${doc.button_link.slug}`}>{doc.button_label.text}</Link>
                            </div>
                          </div>
                        </header>
                    ))}   
                     <main 
                        style={{
                            margin: `0 auto`,
                            maxWidth: 960,
                            padding: `0px 1.0875rem 1.45rem`,
                            paddingTop: 0,
                          }}
                      >     
                        {document.node.data.page_content.map(main => (
                          <div dangerouslySetInnerHTML={{ __html: main.primary.rich_text.html }} />
                        ))} 
                    </main>
                </div>
                
       
                
            ))}


            
            
            <Footer />
        </div>
    )
}

export default Index

export const indexQuery = graphql`
  query IndexQuery {
    allPrismicHomepage {
        edges {
          node {
            id
            data {
              homepage_banner {
                title {
                  text
                }
                image {
                    url
                    alt
                  }
                  button_label {
                    text
                  }
                  button_link {
                    slug
                  }
                  tagline {
                    text
                  }
              }
              page_content {
                primary {
                  rich_text {
                    html
                  }
                }
              }
            }
          }
        }
      }
  }
`


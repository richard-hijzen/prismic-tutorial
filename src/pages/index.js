import React from "react"
import { Link, graphql } from "gatsby"
import TopMenu from "../components/topmenu"
import Footer from "../components/footer"

import "../styles/app.css"

const Index = ({data}) => {
    return (
        <div>
            {data.allPrismicHomepage.edges.map(document => (
                <div>
                    {document.node.data.homepage_banner.map(doc => (
                       
                        <div
                          style={{
                            backgroundImage: `url(${doc.image.url})`,
                            backgroundPosition: `center`,
                            backgroundSize: `cover`,
                            backgroundRepeat: `no-repeat`,
                            margin: `0 auto`,
                            maxWidth: 1200,
                            height: 400,
                            padding: `0px 1.0875rem 1.45rem`,
                            paddingTop: 0,
                            color: `#fff`,
                          }}
                        >
                            <h2>{doc.title.text}</h2>
                            
                            <TopMenu />

                            <p>{doc.tagline.text}</p>

                            <button>
                              <Link to={`/${doc.button_link.uid}`}>{doc.button_label.text}</Link>
                            </button>
                            

                        </div>
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
                    uid
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


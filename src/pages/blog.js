import React from "react"
import { Link, graphql } from "gatsby"
import TitleMenu from "../components/titleMenu"
import Img from 'gatsby-image'
import "../styles/components/blog.scss"

const Index = ({data}) => {
    return (
      <div>
        {data.allPrismicBlogpage.edges.map(document => (
          <header key={document.node.id} id="blog-header">
            <h1>{document.node.data.title.text}</h1>
            <TitleMenu />
            <Img fluid={document.node.data.image.localFile.childImageSharp.fluid}/>
          </header>
        ))}
          <main id="blog-page">
              <ul>
              {data.allPrismicPost.edges.map(document => (
              <li key={document.node.uid}>
              <div id="article-intro">

                <h2>
                  <Link to={`/${document.node.uid}`}>{document.node.data.title.text}</Link>
                </h2>
                <p>{document.node.data.summary.text}</p>

                <div id="read-more">
                  <p><Link to={`/${document.node.uid}`}>Scopri di piu</Link></p>
                </div>
                
              </div>
                  <Img fluid={document.node.data.image.localFile.childImageSharp.fluid}/>                  
              </li>
              
              ))}
              </ul>
          </main>
      </div>
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
              title {
                text
              }
              image {
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 400, maxWidth: 960, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              summary {
                text
              }
            }
          }
        }
      }
      allPrismicBlogpage {
        edges {
          node {
            id
            data {
              title {
                text
              }
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, maxHeight: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      } 
  }
`
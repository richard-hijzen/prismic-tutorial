import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet"
import HelmComp from '../components/helmcomp';
import HeaderNav from "../components/headernav";
import Img from "gatsby-image";
import "../styles/components/blog.scss";

const Index = ({ data }) => {
  const doc = data.allPrismicBlogpage.edges.node;
  return (
    <>
    
      {data.allPrismicBlogpage.edges.map(document => (
        <header key={document.node.id} id="blog-header">
          <HelmComp 
            title={document.node.data.meta_title}
            description={document.node.data.meta_description}
            fb_type="website"
            fb_title={document.node.data.social_title}
            fb_description={document.node.data.social_description}
            fb_image={document.node.data.social_image.url}
            fb_url={document.node.data.social_url.url}
            fb_site_name="Estate in Olanda."
            twitter_alt_image={document.node.data.twitter_image_alt_name.text}
            twitter_card="summary_large_image"
          />
          <HeaderNav />
          <h1>{document.node.data.title.text}</h1>
          <Img
            fluid={document.node.data.image.localFile.childImageSharp.fluid}
          />
        </header>
      ))}
      <main id="blog-page">
        <ul>
          {data.allPrismicPost.edges.map(document => (
            <li key={document.node.uid}>
              <div id="article-intro">
                <h2>
                  <Link to={`/${document.node.uid}`}>
                    {document.node.data.title.text}
                  </Link>
                </h2>
                <p>{document.node.data.summary.text}</p>

                <div className="read-more">
                  <p>
                    <Link to={`/${document.node.uid}`}>Scopri di piu</Link>
                  </p>
                </div>
              </div>
              <Img
                fluid={document.node.data.image.localFile.childImageSharp.fluid}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
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
            meta_title
            meta_description
            social_description
            social_image {
              url
            }
            social_title
            title {
              text
            }
            social_url {
              url
            }
            twitter_card
            twitter_image_alt_name {
              text
            }
            canonical {
              url
            }
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

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
    <HelmComp />
      {data.allPrismicBlogpage.edges.map(document => (
        <header key={document.node.id} id="blog-header">
          <Helmet>
            <title>{document.node.data.meta_title}</title>
            <meta name="description" content={document.node.data.meta_description} />
            <link rel="canonical" href={`https://estate-olanda.netlify.com${document.node.data.canonical.url}`} />
          </Helmet> 
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

                <div id="read-more">
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

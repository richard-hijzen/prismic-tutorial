import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet"
import HelmComp from '../components/helmcomp';
import HeaderNav from "../components/headernav";
import Img from "gatsby-image";
import "../styles/components/winkel.scss";

const AllProducts = ({ data }) => {
  return (
    <>
    <HelmComp />
    
      {data.allPrismicWinkel.edges.map(document => (
        <header key={document.node.data.title.text} id="blog-header">
          <Helmet defer="false">
            <title>{document.node.data.meta_title}</title>
            <meta name="description" content={document.node.data.meta_description} />
            <link rel="canonical" href={`https://estate-olanda.netlify.com${document.node.data.canonical.url}`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={document.node.data.social_title} />
            <meta property="og:description" content={document.node.data.social_description} />
            <meta property="og:image" content={document.node.data.social_image.url} />
            <meta property="og:url" content={`https://estate-olanda.netlify.com${document.node.data.social_url.url}`} />
            <meta property="og:site_name" content="Estate in Olanda." />
            <meta name="twitter:image:alt" content={document.node.data.twitter_image_alt_name.text} />
            <meta name="twitter:card" content="summary_large_image"></meta>
          </Helmet> 
          <HeaderNav />
          <h1>{document.node.data.title.text}</h1>
          <Img
            fluid={document.node.data.image.localFile.childImageSharp.fluid}
          />
        </header>
      ))}
      <main className="shop-page container">
        <ul>
          {data.allPrismicProduct.edges.map(document => (
            <li key={document.node.uid} className="product">
              <Link to={`/${document.node.uid}`}>
                <div className="product-details">
                  <div className="img-container">
                  <Img
                      fluid={document.node.data.image.localFile.childImageSharp.fluid}
                    />
                  </div>
                  <div id="product-intro">
                    <h2>
                        {document.node.data.brand.text}
                    </h2>
                    <p>{document.node.data.short_description.text}</p>
                  </div>
                  <div id="price">
                    <p>€{document.node.data.price.text}</p>
                  </div>
                </div>
              </Link>
              <button
                className="snipcart-add-item"
                data-item-id={document.node.uid}
                data-item-image={document.node.data.image.url}
                data-item-name={document.node.data.brand.text}
                data-item-price={document.node.data.price.text}
                data-item-weight="20"
                data-item-url={`https://estate-olanda.netlify.com/${document.node.uid}`}
                data-item-description={document.node.data.short_description.text}>
                    in mandje
              </button>
              
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default AllProducts

export const prodQuery = graphql`
  query ProductQuery {
    allPrismicProduct {
      edges {
        node {
          uid
          data {
            brand {
              text
            }
            short_description {
              text
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxHeight: 250, maxWidth: 270, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              url
            }
            price {
              text
            }
          }
        }
      }
    }
    allPrismicWinkel {
      edges {
        node {
          data {
            meta_title
            meta_description
            canonical {
              url
            }
            social_title
            social_url {
              url
            }
            twitter_card
            social_description
            social_image {
              url
            }
            twitter_image_alt_name {
              text
            }
            image {
              alt
              localFile {
                childImageSharp {
                  fluid(maxHeight: 400, maxWidth: 960, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`
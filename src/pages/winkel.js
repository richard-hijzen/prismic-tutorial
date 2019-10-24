import React from "react";
import { Link, graphql } from "gatsby";
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
              </Link>
              <button
                className="snipcart-add-item"
                data-item-id="1"
                data-item-image={document.node.data.image.url}
                data-item-name={document.node.data.brand.text}
                data-item-price={document.node.data.price.text}
                data-item-weight="20"
                data-item-url={`/${document.node.uid}`}
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
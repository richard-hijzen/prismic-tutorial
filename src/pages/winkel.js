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
        <header key={document.node.id} id="blog-header"> 
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
              <div className="img-container">
              <Img
                  fluid={document.node.data.image.localFile.childImageSharp.fluid}
                />
              </div>
              <div id="product-intro">
                <h2>
                  <Link to={`/${document.node.uid}`}>
                    {document.node.data.brand.text}
                  </Link>
                </h2>
                <p>{document.node.data.short_description.text}</p>
              </div>
              <div id="price">
                <p>€{document.node.data.price.text}</p>
              </div>
              <div id="read-more">
                  <p>
                    <Link to={`/${document.node.uid}`}>Scopri di piu</Link>
                  </p>
              </div>
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
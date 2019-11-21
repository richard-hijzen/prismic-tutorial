import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import HelmComp from '../components/helmcomp';
import HeaderNav from "../components/headernav";
import Img from "gatsby-image";
import Sort from "../components/sort";
import ProductList from "../components/productlist";
import "../styles/components/winkel.scss";

export const AllProducts = ({ data }) => {
  const [state, setState] = useState({
    sortField: 0,
  }); 
  const postData = data.allPrismicProduct.edges
  const [sorter, setSorter] = useState();             

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
    setSorter(state.sortField);
  };

    useEffect(() => {
      setSorter((sorter != state.sortField) ? state.sortField : sorter);
      
    })
          
  return (
    <>
      {data.allPrismicWinkel.edges.map(document => (
        <header key={document.node.data.title.text} id="blog-header">
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
      <main className="shop-page container">
        <Sort 
          sortField={state.sortField}
          handleChange={handleChange}
        />
        <ProductList
          postData={postData}
          sorter={sorter}
        />
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
            title {
              text
            }
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


import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import HelmComp from '../components/helmcomp';
import HeaderNav from '../components/headernav';
import CommentForm from '../components/commentform';
import Comments from '../components/comments';
import '../styles/app.scss';
import '../styles/templates/product.scss';

const Product = ({ data: { prismicProduct } }) => {
  const { data } = prismicProduct;
  const pageId = prismicProduct.uid;

  return (
    <>
      <HelmComp />
      <header id="product-page-header">
        <HeaderNav />
      </header>
      <main id="product-single-main">
        <article className="single-product container">
          <div>
            <Img 
              fluid={data.image.localFile.childImageSharp.fluid} 
              alt={data.image.alt}
            />
          </div>
          <div>
            <h1>{data.title.text}</h1>
            <h5>€{data.price.text}</h5>
            <h6>{data.short_description.text}</h6>
            <div className="product-single-content container" dangerouslySetInnerHTML={{ __html: data.description.html }} />
            <button
              className="snipcart-add-item"
              data-item-id="1"
              data-item-image={data.image.url}
              data-item-name={data.title.text}
              data-item-price={data.price.text}
              data-item-weight="20"
              data-item-url={`/${pageId}`}
              data-item-description={data.short_description.text}>
                  in winkelmand
            </button>
          </div>
        </article> 
        <CommentForm id={pageId} />
        <Comments id={pageId} />
      </main>
    </>
  );
};

export default Product;

export const pageQuery = graphql`
  query ProductBySlug($uid: String!) {
    prismicProduct(uid: { eq: $uid }) {
        uid
        data {
          title {
            text
          }
          short_description {
            text
          }
          price {
            text
          }
          description {
            html
          }
          image {
            localFile {
              childImageSharp {
                  fluid(maxHeight: 400, maxWidth: 400, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
              }
            }
            alt
            url
          }
          product_pictures {
            product_image {
              localFile {
                childImageSharp {
                    fluid(maxHeight: 400, maxWidth: 960, quality: 90) {
                        ...GatsbyImageSharpFluid
                      }
                }
              }
              alt
              url
            }
          }
        }
    }
  }
`;

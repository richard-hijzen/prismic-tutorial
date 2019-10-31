import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Helmet } from "react-helmet"
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
      <Helmet>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
        <link rel="canonical" href={`https://estate-olanda.netlify.com${data.canonical.url}`} />
      </Helmet>
      <header id="product-page-header">
        <HeaderNav />
      </header>
      <main id="product-single-main">
        <article className="single-product container">
          <div className="product-image">
            <Img 
              fluid={data.image.localFile.childImageSharp.fluid} 
              alt={data.image.alt}
            />
          </div>
          <div className="product-data">
            <h1 className="product-title">{data.brand.text}</h1>
            <h6 className="product-short-description">{data.short_description.text}</h6>
            <h5 className="product-price">€{data.price.text}</h5>
            <div className="product-single-content container" dangerouslySetInnerHTML={{ __html: data.description.html }} />
            <button
              className="snipcart-add-item"
              data-item-id={pageId}
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
          meta_title
          meta_description
          canonical {
            url
          }
          brand {
            text
          }
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

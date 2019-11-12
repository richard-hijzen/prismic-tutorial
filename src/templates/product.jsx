import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import AverageRating from '../components/averageRating';
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
      <HelmComp 
        title={data.meta_title}
        description={data.meta_description}
        fb_type="website"
        fb_title={data.social_title}
        fb_description={data.social_description}
        fb_image={data.social_image.url}
        fb_url={data.social_url.url}
        fb_site_name="Estate in Olanda."
        twitter_alt_image={data.twitter_image_alt_name.text}
        twitter_card="summary_large_image"
      />
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
            <AverageRating id={pageId}/>
            <div className="product-single-content container" dangerouslySetInnerHTML={{ __html: data.description.html }} />
            <button
              className="snipcart-add-item"
              aria-label="add to cart"
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
        <CommentForm 
          id={pageId}
          product={true}
         />
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
          meta_description
          meta_title
          social_description
          social_image {
            url
          }
          social_title
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

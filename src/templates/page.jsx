import React from "react";
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import HelmComp from '../components/helmcomp';
import { ImageCaption, Quote, Text, CenteredText } from "../components/slices"
import HeaderNav from "../components/headernav"
import ContactForm from "../components/contactform"


export const pagesQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        meta_title
        meta_description
        canonical {
          url
        }
        page_title {
          text
        }
        body {
          ... on PrismicPageBodyCenteredText {
            id
            slice_type
            primary {
              heading {
                text
              }
              text {
                html
                text
              }
            }
          }
          ... on PrismicPageBodyFeature {
            id
            slice_type
            primary {
              featured_image {
                alt
                url
              }
              heading {
                text
              }
              text {
                text
              }
            }
          }
        }
      }
    }
  }
`

// Sort and display the different slice options
const PostSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case 'centered_text':
          return (
            <div key={index} className="homepage-slice-wrapper">
              {<CenteredText slice={slice} />}
            </div>
          )

        case 'quote':
          return (
            <div key={index} className="homepage-slice-wrapper">
              {<Quote slice={slice} />}
            </div>
          )

        case 'feature':
          return (
            <div key={index} className="homepage-slice-wrapper">
              {<ImageCaption slice={slice} />}
            </div>
          )

        default:
          return
      }
    })();
    return res;
  });
};

// Display the title, date, and content of the Post
const PostBody = ({ page }) => {
  const titled = page.page_title.length !== 0
  return (
    <div>
      <div className="container post-header">
        {/* Render the title */}
        <h1 data-wio-id="page-title">
          {titled ? page.page_title.text : 'Untitled'}
        </h1>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <PostSlices slices={page.body} />
    </div>
  );
};

const PostForm = ({ pageid }) => {
  if (pageid !== 'contact-us') return null;

  return <ContactForm />;
};

export default (props) => {
  // Define the Post content returned from Prismic
  const doc = props.data.prismicPage.data;
  const pageId = props.data.prismicPage.uid;

  if (!doc) return null;

  return (
    <>
      <HelmComp />
      <Helmet>
        <title>{doc.meta_title}</title>
        <meta name="description" content={doc.meta_description} />
        <link rel="canonical" href={`https://estate-olanda.netlify.com${doc.canonical.url}`} />
      </Helmet>
      <HeaderNav />
      <PostBody page={doc} />
      <PostForm pageid={pageId} />
    </>
  );
};

import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import HelmComp from '../components/helmcomp';
import SocialShare from '../components/socialShare';
import HeaderNav from '../components/headernav';
import CommentForm from '../components/commentform';
import Comments from '../components/comments';
import '../styles/app.scss';

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost;
  const pageId = prismicPost.uid;

  return (
    <>
      <HelmComp 
        article={true}
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
        pub_date={prismicPost.first_publication_date}
        up_date={prismicPost.last_publication_date}
      />
      <header id="blog-single-header">
        <HeaderNav />
        
        <Img fluid={data.image.localFile.childImageSharp.fluid} />
      </header>
      <main id="blog-single-main">
        <h1>{data.title.text}</h1>
        <article className="blog-post">
          <div className="blog-post-content container" dangerouslySetInnerHTML={{ __html: data.content.html }} />
          <SocialShare url={data.social_url.url}/>
        </article> 
        <CommentForm id={pageId} />
        <Comments id={pageId} />
      </main>
    </>
  );
};

export default Post;

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date(formatString: "")
      last_publication_date(formatString: "")
      data {
        meta_title
        meta_description
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
        title {
          text
        }
        content {
          html
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
      }
    }
  }
`;

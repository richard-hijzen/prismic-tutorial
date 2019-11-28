import React from "react"
import { Link, graphql } from "gatsby"
import HeaderNav from "../components/headernav"
import Footer from "../components/footer"
import HelmComp from '../components/helmcomp';
import { ImageGallery, Text, ArticleList, ImageLeft, ImageRight, CTAFeature } from "../components/slices"
import "../styles/bootstrap/bootstrap.min.css"
import "../styles/app.scss"
import "../styles/slices/listofarticles.scss"


// Sort and display the different slice options
const PostSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case "text_section":
          return (
            <section key={index} className="homepage-slice-wrapper">
              <Text slice={slice} />
            </section>
          )

        case "list_of_articles":
          return (
            <section
              key={index}
              className="homepage-slice-wrapper-article-list"
            >
              <ArticleList slice={slice} />
            </section>
          )

        case "image_gallery":
          return (
            <section key={index} className="homepage-slice-wrapper-gallery">
              {<ImageGallery slice={slice} />}
            </section>
          )

          case "image_left_text_right":
          return (
            <section key={index} className="homepage-slice-wrapper-image-left">
              {<ImageLeft slice={slice} />}
            </section>
          )

          case "image_right":
            return (
              <section key={index} className="homepage-slice-wrapper-image-right">
                {<ImageRight slice={slice} />}
              </section>
            )

            case "cta_feature":
            return (
              <section key={index} className="homepage-slice-wrapper-cta_feature">
                {<CTAFeature slice={slice} />}
              </section>
            )

        default:
          return
      }
    })()
    return res
  })
}

// Display the title, menu and content of the Homepage
const PostBody = ({ homepage }) => {
  return (
    <div>
      <header>
        <div id="header-parts">
          <HeaderNav />
          <div id="intro" 
              style={{
                backgroundImage: `url(${homepage.homepage_banner[0].image.url})`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                maxWidth: `100%`,
                height: 400,
                color: `#fff`,
              }}>
            <p id="header-text">{homepage.homepage_banner[0].tagline.text}</p>
            <Link
              id="header-button"
              to={`/${homepage.homepage_banner[0].button_link.slug}`}
            >
              {homepage.homepage_banner[0].button_label.text}
            </Link>
          </div>
        </div>
      </header>
      {/* Go through the slices of the post and render the appropiate one */}
      <main
        style={{
          width: 1200,
          maxWidth: `100%`,
          margin: `0 auto`,
        }}
      >
        <PostSlices slices={homepage.page_content} />
      </main>
    </div>
  )
}

const App = props => {
  // Define the Post content returned from Prismic
  let doc = props.data.prismicHomepage.data

  if (!doc) return null

  return (
    <>
      <HelmComp
        home={true}
        title={doc.meta_title}
        description={doc.meta_description}
        fb_type="website"
        fb_title={doc.social_title}
        fb_description={doc.social_description}
        fb_image={doc.social_image.url}
        fb_url=""
        fb_site_name="Estate in Olanda."
        twitter_alt_image={doc.twitter_image_alt_name.text}
        twitter_card="summary_large_image"
      />
      <PostBody homepage={doc} />
      <Footer />
    </>
  )
}

export default App

export const indexQuery = graphql`
  query IndexQuery {
    prismicHomepage {
      id
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
        homepage_banner {
          title {
            text
          }
          image {
            url
            alt
          }
          button_label {
            text
          }
          button_link {
            slug
          }
          tagline {
            text
          }
        }
        page_content {
          ... on PrismicHomepagePageContentTextSection {
            id
            slice_type
            primary {
              rich_text {
                html
              }
            }
          }
          ... on PrismicHomepagePageContentListOfArticles {
            id
            slice_type
            primary {
              title_of_section {
                html
              }
            }
            items {
              articles_to_link {
                uid
                document {
                  data {
                    image {
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 400, maxHeight: 225) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                    summary {
                      text
                    }
                    title {
                      text
                    }
                  }
                }
              }
            }
          }
          ... on PrismicHomepagePageContentImageGallery {
            id
            slice_type
            primary {
              name_of_the_gallery {
                html
              }
            }
            items {
              gallery_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 960, maxHeight: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              image_captions {
                text
              }
            }
          }
          ... on PrismicHomepagePageContentImageLeftTextRight {
            id
            slice_type
            primary {
              content {
                html
              }
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on PrismicHomepagePageContentImageRight {
            id
            slice_type
            primary {
              content {
                html
              }
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on PrismicHomepagePageContentCtaFeature {
            id
            slice_type
            primary {
              cta_link {
                url
              }
              cta_text {
                text
              }
              featured_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 700, maxHeight: 700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              heading {
                text
              }
              text {
                html
                text
              }
            }
          }
        }
      }
    }
  }
`

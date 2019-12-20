import React from "react";
import { ImageGallery, Text, ArticleList, Quote, ImageAside, CTAFeature, CenteredText, ImageCaption, MapContainer } from "./slices"

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
  
            case "quote":
              return (
                <section key={index} className="homepage-slice-wrapper-quote">
                  {<Quote slice={slice} />}
                </section>
              )
  
            case "image_aside":
              return (
                <section key={index} className="homepage-slice-wrapper-image-aside">
                  {<ImageAside slice={slice} />}
                </section>
              )
  
              case "cta_feature":
              return (
                <section key={index} className="homepage-slice-wrapper-cta_feature">
                  {<CTAFeature slice={slice} />}
                </section>
              )

              case 'centered_text':
                return (
                    <div key={index} className="homepage-slice-wrapper">
                    {<CenteredText slice={slice} />}
                    </div>
                )

                case 'feature':
                    return (
                        <div key={index} className="homepage-slice-wrapper">
                        {<ImageCaption slice={slice} />}
                        </div>
                    )

                case "map":
                  return (
                    <section key={index} className="homepage-slice-wrapper">
                      <MapContainer slice={slice} />
                    </section>
                  )
  
          default:
            return
        }
      })()
      return res
    })
  }

  export default PostSlices;
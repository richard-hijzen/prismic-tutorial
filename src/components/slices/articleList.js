import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ slice }) => (
  <>
    <div
                id="wrapper-intro"
                dangerouslySetInnerHTML={{
                  __html: slice.primary.title_of_section.html,
                }}
              />
              <div className="article-list">
                {slice.items.map((doc, index) => (
                  <article key={index} className="article-item">
                    <Img
                      fluid={
                        doc.articles_to_link.document[0].data.image.localFile
                          .childImageSharp.fluid
                      }
                    />
                    <div className="listcontent">
                      <h3>
                        <Link to={`/${doc.articles_to_link.uid}`}>
                          {doc.articles_to_link.document[0].data.title.text}
                        </Link>
                      </h3>
                      <p>
                        {doc.articles_to_link.document[0].data.summary.text}
                      </p>
                      <div className="read-more">
                        <p>
                          <Link to={`/${doc.articles_to_link.uid}`}>
                            Scopri di piu
                          </Link>
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
  </>
)

import React, {setState, useEffect, useState} from 'react';
import { Link} from "gatsby";
import Img from "gatsby-image";
import AverageRating from './averageRating';


export const ProductList = ({postData, sorter}) => {
    const newPostData = 
    (sorter == 1) ? postData.sort((a,b) => (a.node.data.price.text > b.node.data.price.text) ? 1 : -1) :
    (sorter == 2) ? postData.sort((a,b) => (a.node.data.price.text < b.node.data.price.text) ? 1 : -1) :
    (sorter == 3) ? postData.sort((a,b) => (a.node.uid > b.node.uid) ? 1 : -1) :
    (sorter == 4) ? postData.sort((a,b) => (a.node.uid < b.node.uid) ? 1 : -1) :
    postData;

return (
    <ul>
          {newPostData.map(document => (
            <li key={document.node.uid} className="product">
              <Link to={`/${document.node.uid}`}>
                <div className="product-details">
                  <div className="img-container">
                  <Img
                      fluid={document.node.data.image.localFile.childImageSharp.fluid}
                    />
                  </div>
                  <div id="product-intro">
                    <h2>
                        {document.node.data.brand.text}
                    </h2>
                    <p>{document.node.data.short_description.text}</p>
                  </div>
                  <div id="price">
                    <p>€{document.node.data.price.text}</p>
                  </div>
                  <AverageRating id={document.node.uid}/>
                </div>
              </Link>
              <button
                className="snipcart-add-item"
                aria-label="add-to-cart"
                data-item-id={document.node.uid}
                data-item-image={document.node.data.image.url}
                data-item-name={document.node.data.brand.text}
                data-item-price={document.node.data.price.text}
                data-item-weight="20"
                data-item-url={`https://estate-olanda.netlify.com/${document.node.uid}`}
                data-item-description={document.node.data.short_description.text}>
                    in mandje
              </button>
            </li>
          ))}
        </ul>
)
}

export default ProductList

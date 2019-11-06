import React from 'react';
import { Helmet } from "react-helmet"


export default function HelmComp({home,article,title,description,fb_type,fb_title,fb_description,fb_image,fb_url,fb_site_name,twitter_alt_image,twitter_card}) {

    const author = "Richard Hijzen";

    const schemaOrgWebPage = {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        url: fb_url,
        inLanguage: "nl-NL",
        mainEntityOfPage: fb_url,
        description: fb_description,
        name: title,
        author: {
          '@type': 'Person',
          name: author,
        },
        copyrightHolder: {
          '@type': 'Person',
          name: author,
        },
        copyrightYear: '2019',
        creator: {
          '@type': 'Person',
          name: author,
        },
        publisher: {
          '@type': 'Person',
          name: author,
        },
        datePublished: '2019-01-18T10:30:00+01:00',
        image: {
          '@type': 'ImageObject',
          url: `${fb_image}`,
        },
      };

      let schemaArticle = null

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author,
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: `${fb_image}`,
        },
      },
      description: description,
      headline: title,
      inLanguage: "nl-NL",
      url: fb_url,
      name: title,
      image: {
        '@type': 'ImageObject',
        url: fb_image,
      },
      mainEntityOfPage: fb_url,
    }

  }
    
    return (
        <Helmet htmlAttributes={{ lang : 'nl-NL' }}>
            <link
            rel="preload"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
            />
            <link
            rel="preload"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
            />
            <link 
            rel="preload"
            href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" 
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
            />
            {home && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
            {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content={fb_type} />
            <meta property="og:title" content={fb_title} />
            <meta property="og:description" content={fb_description} />
            <meta property="og:image" content={fb_image} />
            <meta property="og:url" content={fb_url} />
            <meta property="og:site_name" content={fb_site_name} />
            <meta name="twitter:image:alt" content={twitter_alt_image} />
            <meta name="twitter:card" content={twitter_card}></meta>
            
        </Helmet>
    );
};
import React from 'react';
import { Helmet } from "react-helmet"


export default function HelmComp({title,description,fb_type,fb_title,fb_description,fb_image,fb_url,fb_site_name,twitter_alt_image,twitter_card}) {
    
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
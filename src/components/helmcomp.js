import React from 'react';
import { Helmet } from "react-helmet"


export default function HelmComp() {
    
    return (
        <Helmet htmlAttributes={{ lang : 'nl' }}>
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
            
        </Helmet>
    );
};
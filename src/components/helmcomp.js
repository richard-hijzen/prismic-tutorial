import React from 'react';
import { Helmet } from "react-helmet"

export default function HelmComp() {
    return (
        <Helmet>
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
            href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" 
            rel="preload" 
            as="style"
            onload="this.onload=null;this.rel='stylesheet'" 
            />
            <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous" defer></script>
            <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key={process.env.data_api_key} defer></script>
        </Helmet>
    );
};
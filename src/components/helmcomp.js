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
            <link 
            href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" 
            rel="preload" 
            as="style"
            onload="this.onload=null;this.rel='stylesheet'" 
            />
            
            <script
            type="text/javascript" 
            id="snipcart" 
            src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" 
            data-api-key='ZTY2ZWQ2M2ItNDdkNy00ZGFhLTg1Y2MtOTg4MTI3YTMyZmRiNjM3MDY2NzQ3MjIyMTQ0MDc0' defer></script>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous" defer></script>
        </Helmet>
    );
};
import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    EmailIcon
  } from 'react-share';


  const SocialShare = ({url}) => {
      return(
          <>
            <FacebookShareButton url={`https://lovecode.nl${url}/`}>
                <FacebookIcon size={40} round={false} borderRadius={5} />
            </FacebookShareButton>
            <TwitterShareButton url={`https://lovecode.nl${url}/`}>
                <TwitterIcon size={40} round={false} borderRadius={5} />
            </TwitterShareButton>
            <WhatsappShareButton url={`https://lovecode.nl${url}/`}>
                <WhatsappIcon size={40} round={false} borderRadius={5} />
            </WhatsappShareButton>
            <EmailShareButton url={`https://lovecode.nl${url}/`}>
                <EmailIcon size={40} round={false} borderRadius={5} />
            </EmailShareButton>
          </>
      )
  }

  export default SocialShare;
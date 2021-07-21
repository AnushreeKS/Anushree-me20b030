import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './footer.css';

function foot()
{
    return(
      <div id="footr">
        <div className="Connect">
           <a href="https://instagram.com"><InstagramIcon /></a>
           <a href="https://facebook.com"><FacebookIcon /></a>
           <a href="https://linkedin.com"><LinkedInIcon /></a>
        </div>
      </div>
    );
}

export default foot;
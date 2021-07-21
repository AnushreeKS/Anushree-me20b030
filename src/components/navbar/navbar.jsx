import React from 'react';

import './navbar.css';

function nb()
{
    return(
      <div className ="nb1">
         
         <button type="button" class="btn btn-danger">
             <a className= "nl1" href="#home">Home </a>
             <span class="navbar-toggler-icon"></span>
         </button>
         <button type="button" class="btn btn-danger">
             <a className= "nl1" href="#property">Products </a>
             <span class="navbar-toggler-icon"></span>
         </button>
         <button type="button" class="btn btn-danger">
             <a className= "nl1" href="#footr">Connect </a>
             <span class="navbar-toggler-icon"></span>
         </button>
         
      </div>
    );
}

export default nb;
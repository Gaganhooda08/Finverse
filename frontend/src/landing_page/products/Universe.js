import React from 'react';
import { Link } from 'react-router-dom';


function Universe() {
    return ( 
       <div className="right-section container border-top p-5">
      <div className="row text-center">
        <h1>The Finverse Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platform</p>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/smallcaseLogo.png' className="partner-logo"/>
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/streakLogo.png' className="partner-logo"/>
          <p className='text-small text-muted'>Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/sensibullLogo.svg' className="partner-logo"/>
          <p className='text-small text-muted'>Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/finverseFundLogo.png' className="partner-logo"/>
          <p className='text-small text-muted'>Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/goldenpiLogo.png' className="partner-logo"/>
          <p className='text-small text-muted'>Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/dittoLogo.png' className="partner-logo"/>
          <p className='text-small text-muted'>Insurance</p>
        </div>
         <Link to="/signup" style={{ textDecoration: "none" }}>
              <button 
                className='p-2 btn btn-primary fs-5 mb-5' 
                style={{ width:"20%", margin: "0 auto" }}
              >
                Signup Now
              </button>
            </Link>

      </div>
    </div>
     );
}

export default Universe;
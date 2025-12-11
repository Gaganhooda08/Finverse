import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="right-section container mt-5">
      <div className="row align-items-center">
        <div className="col-md-4 p-5">
          <h3 className="product-title">{productName}</h3>
          <p className="product-description">{productDescription}</p>
            <a href={learnMore} className="learn-link" style={{textDecoration:"none"}}>
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          
        </div>
        <div className='col-2'></div>
        <div className="col-md-6 p-5 text-center">
          <img src={imageURL} alt={productName} className="product-image img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
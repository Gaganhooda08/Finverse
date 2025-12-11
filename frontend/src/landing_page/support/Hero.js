import React from 'react';

function Hero() {
  return (
    <section className='container-fluid' id='supportHero'>
      
      <div className='d-flex justify-content-between align-items-center px-4 py-3' id='supportWrapper'>
        <h4 className='mb-0'>Support Portal</h4>
        <a href='' className='text-white'>Track Tickets</a>
      </div>

      
      <div className='row px-4 py-4'>
        
        <div className='col-md-6'>
          <h1 className='fs-5 mb-3 '>Search for an answer or browse help topics to create a ticket</h1>
          <input
            className='form-control mb-3'
            placeholder='Eg: how do I activate F&O, why is my order getting rejected.'
          />
          <div className='d-flex flex-wrap gap-2'>
            <a href='' className='text-white'>Track account opening</a>
            <a href='' className='text-white'>Track segment activation</a>
            <a href='' className='text-white'>Intraday margins</a>
            <a href='' className='text-white'>Kite user manual</a>
          </div>
        </div>

        
        <div className='col-md-6'>
          <h1 className='fs-5 mb-3'>Featured</h1>
          <ol className='ps-3'>
            <li><a href='' className='text-white'>Current Takeovers and Delisting - January 2025</a></li>
            <li><a href='' className='text-white'>Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
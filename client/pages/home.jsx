import React from 'react';
import Footer from '../components/footer';

export default function Home(props) {
  return (
    <>
      <div className='bg'>
        <div className='container'>
          <div className='row wrap justify-center'>
            <div className='col-full brand'>
              <h1 className='sonagi-gradient'>Sonagi</h1>
              <h2 className='studios-gradient'>Studios</h2>
            </div>
            <div className='col-third season'>
              <p>Season I</p>
              <p className='theme'>Life, death, and everything in between.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

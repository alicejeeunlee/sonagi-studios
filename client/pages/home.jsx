import React from 'react';
import Footer from '../components/footer';

export default function Home(props) {
  return (
    <>
      <div className='bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-full'>
              <h1>Hello World</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

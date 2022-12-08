import React from 'react';
import HelloWorld from '../components/hello-world';

export default function Home(props) {
  return (
    <div className='container'>
      <div className='row'>
        <HelloWorld />
      </div>
    </div>
  );
}

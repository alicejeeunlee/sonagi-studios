import React from 'react';

export default function Footer(props) {
  return (
    <div className='bg-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-three-fourth'>
            <label>Join our email list</label>
            <input type="email" placeholder="email" />
            <div className='row'>
              <div className='col-third'>
                <p>About</p>
                <a href="">Sonagi Studios</a>
                <a href="">Design Process</a>
                <a href="">Courses</a>
                <a href="">Email List</a>
              </div>
              <div className='col-third'>
                <p>Shop</p>
                <a href="">New</a>
                <a href="">Previous Seasons</a>
                <a href="">Custom Order</a>
              </div>
              <div className='col-third'>
                <p>Need Help?</p>
                <a href="">Contact</a>
                <a href="">FAQ</a>
              </div>
            </div>
          </div>
          <div className='col-fourth'>
            <div className='row'>
              <div className='col-half'>
                <button>instagram</button>
                <button>facebook</button>
                <button>pinterest</button>
                <button>linkedin</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

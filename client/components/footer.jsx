import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='bg-footer'>
        <div className='container'>
          <div className='row footer-padding'>
            <div className='col-three-fifth footer-links'>
              <form className='vertical-align'>
                <label>Join our email list</label>
                <div className='input-wrapper'>
                  <input type="email" placeholder="email" />
                  <button className='input-submit-button'>
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                </div>
              </form>
              <div className='row'>
                <div className='col-third footer-col-padding'>
                  <p>About</p>
                  <a href="">Sonagi Studios</a>
                  <a href="">Design Process</a>
                  <a href="">Courses</a>
                  <a href="">Email List</a>
                </div>
                <div className='col-third footer-col-padding'>
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
            <div className='col-two-fifth social-links'>
              <div className='row'>
                <div className='col-full'>
                  <a href='https://www.instagram.com/sonagi_studios/'><img src="/images/instagram-logo.png" alt="Instagram" /></a>
                  <a href=''><img src="/images/facebook-logo.png" alt="Facebook" /></a>
                  <a href=''><img src="/images/pinterest-logo.png" alt="Pinterest" /></a>
                  <a href='https://www.linkedin.com/in/sonagi-studios-044b2b223/'><img src="/images/linkedin-logo.png" alt="LinkedIn" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

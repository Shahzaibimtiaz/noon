import React from 'react';

const Header = () => {
  return <div className="header">
    
            <div className='logo'><img src='/images/logo.png' /></div>
            
            <div className='ae_header'>
              <div className='flag_header'><img src='/images/ae.png'/></div>
                <div className='deliver_ae'>
                  <p>Deliver to</p>
                  <span className='downArrow_ae'><img src='/images/downarrow.png'/></span>
                </div>
                <div>
                  <p className='dubai_ae'>Dubai</p>
                </div>
            </div>

            <div className='search_header'>
              <span><input type="text" placeholder="What are you looking for?" /></span>
            </div>
            
            <div className='arabic_header'>
              <p>Arabic</p>
              <span></span>
            </div>

            <div className='signin_header'>
              <p>Sign In</p>
              <img src='/images/signin.png' />
              <span></span>
            </div>

            <div className='cart_header'>
              <p>Cart</p>
              <img src='/images/cart.png' />
            </div>

         </div>
  
};

export default Header;

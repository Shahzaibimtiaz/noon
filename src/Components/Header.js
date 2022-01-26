import React from 'react';

const Header = () => {
  return <div className="header">
    
            <div className='logo'><img src='/noon/images/logo.png' alt='img' /></div>
            
            <div className='ae_header'>
              <div className='flag_header'><img src='/noon/images/ae.png' alt='img'/></div>
                <div className='deliver_ae'>
                  <p>Deliver to</p>
                  <span className='downArrow_ae'><img src='/noon/images/downarrow.png' alt='img'/></span>
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
              <img src='/noon/images/signin.png' />
              <span></span>
            </div>

            <div className='cart_header'>
              <p>Cart</p>
              <img src='/noon/images/cart.png' />
            </div>

         </div>
  
};

export default Header;

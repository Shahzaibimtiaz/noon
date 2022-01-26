import React from 'react';

function Navbar() {
  return <div className='navbar'>

            <div className='navbar_text'>
                <div className='categories_nav'>
                    <ul>
                        <a href=''>ALL CATEGORIES</a>
                    </ul>
                    <img src='/images/downward-arrow.png' />
                    <span></span>
                </div>
                <div className='navbarul_text'>                
                    <ul>
                        <li><a href=''>ELECTRONICS</a></li>
                        <li><a href=''>MEN</a></li>
                        <li><a href=''>WOMEN</a></li>
                        <li><a href=''>HOME</a></li>
                        <li><a href=''>BEAUTY & FRAGRANCE</a></li>
                        <li><a href=''>BABY & TOYS</a></li>
                        <li><a href=''>GROCERY</a></li>
                        <li><a href=''>SPORTS</a></li>
                    </ul>
                </div>
            </div>

         </div>;
}

export default Navbar;

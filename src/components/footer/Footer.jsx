import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <section className='footer'>
        <div className='container'>
            <ul className='footer__list'>
                  <li className='footer__item'>
                      <h3>Listee Travel</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  </li>
                  <li className='footer__item'>
                      <h3>About</h3>
                      <p>Menu</p>
                      <p>Features </p>
                      <p>News & Blogs</p>
                      <p>Help & Supports</p>
                  </li>
                  <li className='footer__item'>
                      <h3>Company</h3>
                      <p>Company</p>
                      <p>Terms of service </p>
                      <p>
                          Pricing
                          </p>
                      <p>FAQ</p>
                  </li>
                  <li className='footer__item'>
                      <h3>Contact Us</h3>
                      <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
                      <p> +1 202-918-2132</p>
                      <p>listeetravel@mail.com</p>
                      <p>www.listeetravel.com</p>
                  </li>
            </ul>
        </div>
        <div className='footer__bg'>

        </div>
    </section>
  )
}

import React from 'react'
import './Photos.css'
import FirstImg from './../../assets/Rectangle 4.png';
import SecondImg from './../../assets/22.png';
import ThirthImg from './../../assets/33.png';
import FourthImg from './../../assets/44.png'
import FiveImg from './../../assets/55.png';
import SixImg from './../../assets/66.png';

export default function Photos() {
  return (
      <section className='tour'>
          <div className='container'>
              <p className='activity__subtitle'>Best Traveler’s</p>
              <h2 className='activity__title'>Shared photos</h2>
              <p className='activity__text'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

              <ul className='photos__list'>
                  <li className='photos__item'>
                      <img src={FirstImg} alt="first" />
                      
                  </li>
                  <li className='photos__item'>
                      <img src={SecondImg} alt="first" />
                      
                  </li>
                  <li className='photos__item'>
                      <img src={ThirthImg} alt="first" />
                      
                  </li>

                  <li className='photos__item'>
                      <img src={FourthImg} alt="first" />

                  </li>
                  <li className='photos__item'>
                      <img src={FiveImg} alt="first" />

                  </li>
                  <li className='photos__item'>
                      <img src={SixImg} alt="first" />

                  </li>


              </ul>

          </div>
      </section>
  )
}

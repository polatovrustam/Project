import React from 'react'
import './Tour.css'
import FirstImg from './../../assets/Rectangle 34.png';
import SecondImg from './../../assets/Rectangle 35.png';
import ThirtsImg from './../../assets/Rectangle 36 (1).png';

export default function Tour() {
  return (
      <section className='tour'>
          <div className='container'>
              <p className='activity__subtitle'>Popular</p>
              <h2 className='activity__title'>tour packages</h2>
              <p className='activity__text'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

              <ul className='tour__list'>
                <li className='tour__item'>
                    <img src={FirstImg} alt="first" />
                    <div className='tour__content'>
                        <div>
                              <h3 className='tour__content__main'>ROME, ITALY</h3>
                              <span className='tour__content__day'>10 dat trip</span>
                        </div>
                          <span className='tour__content__price'>
                            $5.24K
                        </span>
                    </div>
                </li>
                  <li className='tour__item'>
                      <img src={SecondImg} alt="first" />
                      <div className='tour__content'>
                          <div>
                              <h3 className='tour__content__main'>Lahore, pakistan</h3>
                              <span className='tour__content__day'>10 dat trip</span>
                          </div>
                          <span className='tour__content__price'>
                              $3.25K
                          </span>
                      </div>
                  </li>
                  <li className='tour__item'>
                      <img src={ThirtsImg} alt="first" />
                      <div className='tour__content'>
                          <div>
                              <h3 className='tour__content__main'>singapore</h3>
                              <span className='tour__content__day'>10 dat trip</span>
                          </div>
                          <span className='tour__content__price'>
                              $7.00K
                          </span>
                      </div>
                  </li>

                 
              </ul>
            
          </div>
      </section>
  )
}

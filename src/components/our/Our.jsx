import React from 'react'
import './Our.css'
import Img from './../../assets/pngwing.com 1.png';
import Strelka from '../../assets/Vector.png';

export default function Our() {
  return (
    <section className='our'>
        <img className='our__img' src={Img}/>
        <div className='our__content'>
              <h2 className='our__title'>Get Our Monthly Newsletter</h2>
              <p className='our__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className='our__btn'><input type="text" placeholder=' Input your emaill address in here ' /><span className='our__strelka'><img src={Strelka}/></span></div>
        </div>
    </section>
  )
}

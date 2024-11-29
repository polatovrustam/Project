import React from 'react'
import './Review.css'
import TireImg from './../../assets/“.png';
import User1 from './../../assets/comment1.svg'
export default function Review() {
  return (
      <section className='review'>
          <div className='container'>
              <p className='activity__subtitle'>Review & Testimonials </p>
              <h2 className='activity__title'>top reviews for etour</h2>
              <p className='activity__text'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

             
              <div className='review__comment'>
                 <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.....
                 </p>
                 <img className='tire' src={TireImg} alt="" />
              </div>
              <div className='comment__user__list'>
                <img src={User1} alt=''/>
                  <img src={User1} alt='' />
                  <div style={{display:"flex", gap:"30px" , alignItems:"center"}}>
                      <img src={User1} alt='' />
                      <img src={User1} alt='' />
                      <p className='comment__username'>Scarlett Thomas <br /> <span>Singapore</span></p>
                  </div>
                  <img src={User1} alt='' />
                  <img src={User1} alt='' />
              </div>
          </div>
      </section>
  )
}

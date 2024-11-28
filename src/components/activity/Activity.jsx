import React from 'react'
import "./Activity.css"
import FirstImg from './../../assets/Layer_1.svg';
import SecondImg from './../../assets/Vector.svg';
import ThirstImg from './../../assets/Layer_1 (1).svg';
import FourthImg from './../../assets/Vector (1).svg';
import FivThImg from './../../assets/Layer_1 (2).svg' 
import sixthImg from './../../assets/Layer_1 (3).svg';
export default function Activity() {
    return (
        <section className='activity'>
            <div className='container'>
                <p className='activity__subtitle'>Travel by</p>
                <h2 className='activity__title'>activity</h2>
                <p className='activity__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                <ul className='activity__list'>
                    <li className='activity__item'>
                        <img width={100} src={FirstImg} alt='Adventure activity' />
                        <h3 className='item__title'>Adventure</h3>
                        <p className='item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </li>
                    <li className='activity__item'>
                        <img width={100} src={SecondImg} alt='Adventure activity' />
                        <h3 className='item__title'>Camping </h3>
                        <p className='item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </li>
                    <li className='activity__item'>
                        <img width={100} src={ThirstImg} alt='Adventure activity' />
                        <h3 className='item__title'>Trekking </h3>
                        <p className='item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </li>
                    <li className='activity__item'>
                        <img width={100} src={FourthImg} alt='Adventure activity' />
                        <h3 className='item__title'>Off Road</h3>
                        <p className='item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </li>
                    <li className='activity__item'>
                        <img width={100} src={FivThImg} alt='Adventure activity' />
                        <h3 className='item__title'>Camp Fire</h3>
                        <p className='item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </li>
                    <li className='activity__item'>
                        <img width={100} src={sixthImg} alt='Adventure activity' />
                        <h3 className='item__title'>Expiring</h3>
                        <p className='item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

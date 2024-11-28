import React from 'react'
import './Destination.css'

export default function Destination() {
    return (
        <section className='destination'>
            <div className='container'>
                <p className='destination__subtitle'>Choose your</p>
                <h1 className='destination__title'>Destination</h1>
                <div className='destination__list'>
                    <div className='destination__left'>
                        <div className='destination__card'>
                            <h2>Malaysia</h2>
                            <button>14 TOURS</button>
                        </div>
                    </div>
                    <div className='destination__right'>
                        <div className='destination__right__top'>
                            <div className='destination__right__first'>
                                <div className='destination__card'>
                                    <h2>Dubai</h2>
                                    <button>14 TOURS</button>
                                </div>
                            </div>
                            <div className='destination__right__second'>
                                <div className='destination__card'>
                                    <h2>Greece</h2>
                                    <button>16 TOURS</button>
                                </div>
                            </div>
                        </div>
                        <div className='destination__right__bottom'>
                            <div className='destination__card'>
                                <h2>Singapore</h2>
                                <button>15 TOURS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div style={{display:"flex" , justifyContent:"center", marginTop:"50px"}}>
                <button className='navbar__right__signup' style={{padding:"15px 10px"}}>VIEW MORE</button>
            </div>
        </section>
    )
}


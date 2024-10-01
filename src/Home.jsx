import React from 'react'
import Image from '../src/assets/music_player.gif'


const Home = () => {
  return (
    <div className='Main'>
    <div className='class1'>
      <h1 className='h1'>HEADPHONE <span className='s1'>Gaming Version</span></h1>
      <p style={{ textAlign: 'justify' }} className='p1'>
      Shipping October 15th. Only pay 30% down at checkout. Exclusively at YSNHub.com
      </p>
      <a className='get' >Pre-Order Now</a>
    </div>
    <div className='class2'>
    <img className='img'  src={Image} alt="" />
    </div>
  </div>
  )
}

export default Home
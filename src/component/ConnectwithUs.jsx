import React from 'react'
import ConnectUs from '../assets/connectwithus.jpg'
import GooglePlay from '../assets/googleplay.png'
import AppleStore from '../assets/Applestore.png'

function ConnectwithUs() {
  return (
    <div className='flex'>
      <div className='min-w-80'>
        <p className='text-5xl'>Connect with us from <br /> anywhere</p>
        <p>Download the mobile app and enjoy the smoothest experience</p>
        <div className='flex mt-16'>
          <img src={GooglePlay}  alt="" />
          <img src={AppleStore}  alt="" />
        </div>
      </div>
      <div className='min-w-40'>
        <img src={ConnectUs} alt="" />
      </div>
    </div>
  )
}

export default ConnectwithUs;
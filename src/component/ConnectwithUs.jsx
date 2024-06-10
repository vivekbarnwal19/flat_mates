import React from 'react'
import ConnectUs from '../assets/connectwithus.jpg'
import GooglePlay from '../assets/googleplay.png'
import AppleStore from '../assets/Applestore.png'


function ConnectwithUs() {
  return (
    <div className='flex mt-40 mb-40'>
      <div className='min-w-80 mt-60'>
        <p className='text-5xl ml-40 '>Connect with us from <br /> anywhere</p>
        <p className='text-2xl ml-40 font-thin mt-10'>Download the mobile app and enjoy the smoothest <br /> experience</p>
        <div className='flex mt-16 ml-40 cursor-pointer'>
          <img src={GooglePlay}  height={50} width={300} alt="" />
          <img src={AppleStore} height={50} width={300} alt="" />
        </div>
      </div>
      <div className='min-w-40 ml-40'>
        <img src={ConnectUs} height={400} width={400} alt="" />
      </div>
    </div>
  )
}

export default ConnectwithUs;
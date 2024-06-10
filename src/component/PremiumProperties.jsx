import React from 'react'
import PremiumImg from '../assets/premiumproperty.avif'
import PremiumImg2 from '../assets/premiumproperty2.jpeg'

function PremiumProperties() {
  return (
    <div className='bg-slate-200 flex '>
      <div className='max-w-100 pl-40 mb-96 '>
        <p className='text-5xl pt-40'>Are You Looking  For <br /> the Premium Properties?</p>
        <p className='text-xl font-thin text-grey mt-10'>View And Book Your Appointment with our <br /> Partners</p>
        <button className='bg-green-600 px-6 py-2 rounded-3xl text-white text-xl mt-16'>View Properties</button>
      </div>

      <div className='flex'>
        <img src={PremiumImg} height={200} width={400} alt="" />
        <img src={PremiumImg2} height={200} width={400} alt="" />
      </div>
    </div>
  )
}

export default PremiumProperties
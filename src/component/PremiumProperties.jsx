import React from 'react'
import PremiumImg from '../assets/premiumproperty.avif'
import PremiumImg2 from '../assets/premiumproperty2.jpeg'

function PremiumProperties() {
  return (
    <div className='bg-slate-200'>
      <div className='max-w-100'>
        <p className='text-5xl '>Are You Looking For the Premium Properties?</p>
        <p className='text-xl font-thin text-grey'>View And Book Your Appointment with our Clients</p>

        <button className='bg-green-500 px-6 py-2 rounded-3xl text-white text-xl'>View Properties</button>

      </div>
      <div>
<img src={PremiumImg} height={500} width={500} alt="" />
<img src={PremiumImg2} height={500} width={500}  alt="" />
      </div>
    </div>
  )
}

export default PremiumProperties
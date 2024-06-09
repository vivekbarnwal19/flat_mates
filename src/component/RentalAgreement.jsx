import React from 'react'
import RentalImage from '../assets/rentalagreement.webp'

function RentalAgreement() {
  return (
    <div className='flex bg-slate-200'>
      <div className='min-w-80'>
        <p className='text-5xl font-semibold'>Getting Rental Agreement <br /> Made Easy, Quick and <br />Affordable</p>
<p>Lowest Price gauranteed</p>
<button className='mt-4 bg-green-500 rounded-xl p-2'>Create Now</button>
      </div>
      <div className='min-w-80'>
        <img src={RentalImage} alt="" />
      </div>

    </div>
  )
}

export default RentalAgreement
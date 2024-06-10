import React from 'react'
import RentalImage from '../assets/rentalagreement.webp'

function RentalAgreement() {
  return (
    <div className='flex bg-slate-200 mt-20'>
      <div className='pl-60 pt-10 mt-20'>
        <p className='text-5xl font-semibold'>Getting Rental Agreement  Made Easy, Quick and Affordable </p>
        <p className='mt-10 flex justify-center text-2xl font-thin'>Lowest Price gauranteed!! Create your rental agreement online in minutes</p>
        <div className='mt-10'>
        <button className='bg-green-600 rounded-3xl px-7 py-3 text-white'>Create Now</button>
        </div>
      </div>
      <div className='min-w-40 mt-40'>
        <img src={RentalImage} height={2500} width={2500} alt="" />
      </div>

    </div>
  )
}

export default RentalAgreement
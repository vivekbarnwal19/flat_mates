import React from 'react'
import RIcon from '../assets/png-transparent-registered-trademark-symbol-service-mark-copyright-r-miscellaneous-text-trademark-thumbnail.png'

function Footer() {
  return (
    <div className='mt-20 flex gap-28  justify-center'>
      <div className='leading-8'>
        <p className="heading relative cursor-pointer">Flat<span className="text-green-600 font-semibold">Mates</span>
          <img src={RIcon} height={15} width={15} alt="" className="absolute left-[102px] top-1" />
        </p>
        <p className='text-gray-500 font-normal'>Unit No. 1232</p>
        <p className='text-gray-500 font-normal'>Greater Noida West <br /> Ghaziabad:201009</p>
        <a href=" "><p className='text-gray-500 font-normal'>feedback@flatmates.in</p></a>
        <button className='bg-green-600 px-4 py-1 rounded-3xl text-white text-xl '>Contact Us</button>
      </div>

      <div className='leading-8'>
        <p className='text-2xl font-medium text-gray-600'>About</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Company</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Terms & Conditions</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Privacy Policy</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Refund and Cancel</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Careers</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Blogs</p>
      </div>

      <div className='leading-8'>
        <p className='text-2xl font-semibold text-gray-600'>FlatMates</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Flatmates in Delhi</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Flatmates in Noida</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Flatmates in Gurgaon</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Flatmates in Banglore</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Flatmates in Pune</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Flatmates in Hydrabad</p>
      </div>

      <div className='leading-8'>
        <p className='text-2xl font-semibold text-gray-600'>PGs</p>
        <p className='text-gray-500 font-normal cursor-pointer'>PGs in Delhi</p>
        <p className='text-gray-500 font-normal cursor-pointer'>PGs in Noida</p>
        <p className='text-gray-500 font-normal cursor-pointer'>PGs in Gurgaon</p>
        <p className='text-gray-500 font-normal cursor-pointer'>PGs in Banglore</p>
        <p className='text-gray-500 font-normal cursor-pointer'>PGs in Pune</p>
        <p className='text-gray-500 font-normal cursor-pointer'>PGs in Hydrabad</p>
      </div>

      <div className='leading-8 '>
        <p className='text-2xl font-semibold text-gray-600'>Our Services</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Rental Agreement</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Tenant Verification</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Buy Furniture</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Rent Reciept</p>
        <p className='text-gray-500 font-normal cursor-pointer'>Manage Your Flat</p>
      </div>

    </div>
  )
}

export default Footer
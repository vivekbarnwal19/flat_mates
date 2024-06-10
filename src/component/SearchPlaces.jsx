import React from 'react'
import LocationIcon from '../assets/images.jpeg'
import RoommateIcon from '../assets/hand-drawn-coliving-illustration_52683-112446.avif'

function SearchPlaces() {
  return (
    <div className="">

      <div className='flex justify-center pt-20 '>
        <div className='flex justify-center relative'>
          <img src={LocationIcon} width={"25"} height={"25"} className='absolute right-[280px]' alt="" />
          <input
            type="text"
            // onChange={handleChange}
            name="search"
            placeholder="Search Places..."

          />
        </div>
      </div>
      <div className='mt-8'>
        <p className='flex justify-center '>Top Cities: <p className='cursor-pointer'>Banglore, Hydrabad , Pune  </p> </p>
      </div>
      <div className='flex justify-center mt-20'>
        <img src={RoommateIcon}  alt="" />
      </div>
    </div>
  )
}

export default SearchPlaces
import React from 'react'
import LocationIcon from '../assets/placeholder_149226.png'
import RoommateIcon from '../assets/hand-drawn-coliving-illustration_52683-112446.avif'

function SearchPlaces() {
  return (
    <div className="">

      <div className='flex justify-center pt-20 '>
        <div className=' relative border-solid border-8 border-indigo-600 rounded-3xl'>
          <img src={LocationIcon} width={"45"} height={"45"} className='absolute pt-3 pl-4' alt="" />
          <form action="" className='bg-slate-200'>
            <input
              type="text"
              // onChange={handleChange}
              name="search"
              placeholder="Search Places..."
              className='bg-slate-200 text-center px-40 py-4  '
            />
          </form>
        </div>
      </div>
      <div className='mt-8'>
        <p className='flex justify-center '>Top Cities: <p className='cursor-pointer  text-slate-400 '>Banglore, Hydrabad , Pune  </p> </p>
      </div>
      <div className='flex justify-center mt-20'>
        <img src={RoommateIcon} alt="" />
      </div>
    </div>
  )
}

export default SearchPlaces
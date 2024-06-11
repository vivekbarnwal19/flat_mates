import React from 'react'
import LocationImg from '../assets/delhi.jpg'

function Cities() {
  return (
    <div className='w-full bg-slate-100'>
      <div className='pt-40'>
        <p className=' flex justify-center text-5xl'>View Rooms in Popular Cities</p>
      </div>

      <div className='flex flex-wrap gap-6 w-10/12 justify-center mt-20 ml-40'>
        <div>
          <img src={LocationImg} height={200} width={200} alt="" />
        </div>
        <div><img src={LocationImg} height={200} width={200} alt="" /></div>
        <div><img src={LocationImg} height={200} width={200} alt="" /></div>
        <div><img src={LocationImg} height={200} width={200} alt="" /></div>
        <div><img src={LocationImg} height={200} width={200} alt="" /></div>
        <div><img src={LocationImg} height={200} width={200} alt="" /></div>

        <div>
          <img src={LocationImg} height={200} width={200} alt="" />
        </div>
        <div><img src={LocationImg} height={200} width={200} alt="" /></div>
        <div><img src={LocationImg} height={200} width={200} alt="" /></div>
        <div><img src={LocationImg} height={200} width={200} alt="" /></div>
        <div><img src={LocationImg} height={200} width={200} alt="" /></div>
        <div><img src={LocationImg} height={200} width={200} alt="" /></div>


      </div>




      <div className='flex justify-center pl-8 mt-20  '>
        <button className=' bg-green-500 px-6 py-2 rounded-3xl'>View All Cities</button>
      </div>
    </div>
  )
}

export default Cities
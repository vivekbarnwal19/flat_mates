import React from 'react'
import RoomImg4 from '../assets/Room4.jpg'

function BangloreProperty() {
  return (
    <div className=''>
        <img src={RoomImg4} height={384} width={384} alt="" />
        <div className='bg-slate-100 max-w-96 '>
          <div className='pl-5'>
            <p className='text-xl font-bold '>0% Security Deposite</p>
            <p className='text-slate-500'>Sector 18, Banglore, Banglore</p>

            <div className='flex justify-between mt-5'>
              <p className='text-2xl'>$ 13000</p>
              <button className='text-green-500 border-solid border-2 border-green-500 p-1'>Book Visit</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BangloreProperty
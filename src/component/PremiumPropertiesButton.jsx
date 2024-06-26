import React from 'react'
import RoomImg1 from '../assets/Room1.jpg'
import RoomImg2 from '../assets/Room2.jpg'
import RoomImg3 from '../assets/Room3.jpg'
import RoomImg4 from '../assets/Room4.jpg'
import RoomImg5 from '../assets/Room5.jpg'

function PremiumPropertiesButton() {
  return (
    <div className='w-full pl-6 mb-10 leading-10 '>

      <div className=''>
        <img src={RoomImg1} height={384} width={384} alt="" />
        <div className='bg-slate-100 max-w-96 '>
          <div className='pl-5'>
            <p className='text-xl font-bold '>0% Security Deposite</p>
            <p className='text-slate-500'>Vasant Kunj, South West Delhi, Delhi</p>

            <div className='flex justify-between mt-5'>
              <p className='text-2xl'>$ 10000</p>
              <button className='text-green-500 border-solid border-2 border-green-500 p-1'>Book Visit</button>
            </div>
          </div>

        </div>

      </div>

      <div className=''>
        <img src={RoomImg2} height={384} width={384} alt="" />
        <div className='bg-slate-100 max-w-96 '>
          <div className='pl-5'>
            <p className='text-xl font-bold '>0% Security Deposite</p>
            <p className='text-slate-500'>Sector 18, Gurgaon, Gurgaon</p>

            <div className='flex justify-between mt-5'>
              <p className='text-2xl'>$ 13000</p>
              <button className='text-green-500 border-solid border-2 border-green-500 p-1'>Book Visit</button>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <img src={RoomImg3} height={384} width={384} alt="" />
        <div className='bg-slate-100 max-w-96 '>
          <div className='pl-5'>
            <p className='text-xl font-bold '>0% Security Deposite</p>
            <p className='text-slate-500'>Sector 18, Pune, Pune</p>

            <div className='flex justify-between mt-5'>
              <p className='text-2xl'>$ 13000</p>
              <button className='text-green-500 border-solid border-2 border-green-500 p-1'>Book Visit</button>
            </div>
          </div>
        </div>
      </div>

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


    </div>
  )
}

export default PremiumPropertiesButton
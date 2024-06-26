import React from 'react'
import RoomImg1 from '../assets/Room1.jpg'

function DelhiProperty() {
    return (

        <div className='flex gap-10'>
            <div>
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
            <div>
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
        </div>
    )
}

export default DelhiProperty
import React from 'react'

function PropertyDetail() {
  return (
    <div>
        <div className='bg-slate-200 mt-20 border-2 border-solid border-black px-10 py-8 pr-16 leading-10 rounded-lg '>
                <p className='text-2xl font-medium'>Property Details</p>
                <p className='text-lg text-slate-600'>Fill in Details of the Property being Rented</p>
                <div>
                    <label for="state" className='text-slate-500'>State*</label>
                    <input className='w-full h-full flex bg-slate-100 px-4 py-2.5' type="text" id="state"></input>
                </div>
                <div>
                    <label for="city" className='text-slate-500'>City*</label>
                    <input className='w-full h-full flex bg-slate-100 px-4 py-2.5' type="text" id="city"></input>
                </div>

                <div>
                    <label for="pincode" className='text-slate-500'>Pincode*</label>
                    <input className='w-full h-full flex bg-slate-100 border px-4 py-2.5' type="pincode" id="pincode" name="pincode"></input>
                </div>

                <div>
                    <label for="address" className='text-slate-500'>House &  StreetAddress*</label>
                    <input className='w-full h-full flex bg-slate-100 px-4 py-2.5' type="text" id="address" name="address" placeholder='Enter Full Address of Property'></input>
                </div>

                <div className='flex justify-end'>
                    <button className=' mt-12 bg-green-600 rounded-lg px-10 py-3 text-white'>Save & Continue</button>
                </div>
            </div>
    </div>
  )
}

export default PropertyDetail
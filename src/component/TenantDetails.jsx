import React from 'react'

function TenantDetails() {
  return (
    <div>
        <div className='bg-slate-200 mt-20 border-2 border-solid border-black px-10 py-8 pr-16 leading-10 rounded-lg '>
                <p className='text-2xl font-medium'>Who is Renting the  Property?</p>
                <p className='text-lg text-slate-600'>Fill in Details of the Tenant/Lessor/Renter</p>
                <div>
                    <label for="name" className='text-slate-500'>Full Name*</label>
                    <input className='w-full h-full flex bg-slate-100 px-4 py-2.5' type="text" id="name"></input>
                </div>

                <div>
                    <label for="phone" className='text-slate-500'>Mobile Number*</label>
                    <input className='w-full h-full flex bg-slate-100 border px-4 py-2.5' type="tel" id="tel" name="phone"></input>
                </div>

                <div>
                    <label for="address" className='text-slate-500'>Address*</label>
                    <input className='w-full h-full flex bg-slate-100 px-4 py-2.5' type="text" id="address" name="address" placeholder='Enter Owner addresss with Pincode'></input>
                </div>

                <div className='flex justify-end'>
                    <button className=' mt-12 bg-green-600 rounded-lg px-10 py-3 text-white'>Save & Continue</button>
                </div>
            </div>
    </div>
  )
}

export default TenantDetails
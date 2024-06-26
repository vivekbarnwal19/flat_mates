import React from 'react'

function DepositeButton() {
    return (
        <div className='w-full border-solid border-4 border-indigo-600  mt-40 mb-40 '>
            <div className=''>
            <h1 className=' text-2xl font-medium mb-2'>Enter Your Details</h1>
            </div>
            <div className='flex gap-10 leading-10'>
                <div>
                    <div>
                        <label for="name" className='text-slate-500'>Full Name</label>
                        <input className='flex bg-slate-100 px-32 py-3' type="text" id="name"></input>
                    </div>

                    <div>
                        <label for="number" className='text-slate-500'>Mobile Number</label>
                        <input className='flex bg-slate-100 border px-32 py-3' type="number" id="number" name="number"></input>
                    </div>

                    <div>
                        <label for="city" className='text-slate-500'>City</label>
                        <input className='flex bg-slate-100 px-32 py-3' type="text" id="city" name="city"></input>
                    </div>
                </div>

                <div>
                    <div className=''>
                        <label for="name" className='text-slate-500'>Last Name</label>
                        <input className='flex bg-slate-100 px-32 py-3' type="text" id="name"></input>
                    </div>

                    <div>
                        <label for="number" className='text-slate-500'>Email</label>
                        <input className='flex bg-slate-100 border px-32 py-3' type="email" id="email" name="email"></input>
                    </div>

                    <div>
                        <label for="cars" className='text-slate-500'>I am a</label>

                        <select id="cars" className='flex bg-slate-100 border px-32 py-3 text-slate-500'>
                            <option value="landlord">Landlord</option>
                            <option value="tenant">Tenant</option>
                            <option value="select-option">Please Select a option</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DepositeButton
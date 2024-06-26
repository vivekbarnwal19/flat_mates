import React from 'react'

function Annexures() {
    return (
        <div>
            <div className='bg-slate-200 mt-20 border-2 border-solid border-black px-10 py-8 pr-16 leading-10 rounded-lg '>
                <p className='text-2xl font-medium'>Furniture Provided</p>
                <p className='text-lg text-slate-600'>Enter Details of Furniture/ appliances provided to the tenant</p>

                <div>
                    <div>
                        <label for="address" className='text-slate-500'>Item*</label>
                        <input className='w-6/12 h-full flex bg-slate-100 px-4 py-2.5' type="text" id="address" name="address" placeholder='e.g. Fans'></input>
                    </div>

                    <div className='mt-6'>
                        <input className='w-6/12 h-full flex bg-slate-100 px-4 py-2.5' type="text" id="address" name="address" placeholder='e.g. Fans'></input>
                    </div>

                </div>

                <div>
                    <div>
                        <label for="address" className='text-slate-500'>Quantity*</label>
                        <input className='w-6/12 h-full flex bg-slate-100 px-4 py-2.5' type="text" id="address" name="address" placeholder='e.g. Fans'></input>
                    </div>

                    <div className='mt-6'>
                        <input className='w-6/12 h-full flex bg-slate-100 px-4 py-2.5' type="text" id="address" name="address" placeholder='e.g. Fans'></input>
                    </div>

                </div>

                


                <div className='flex justify-end'>
                    <button className=' mt-12 bg-green-600 rounded-lg px-10 py-3 text-white'>Generate Rent Agreement</button>
                </div>
            </div>
        </div>
    )
}

export default Annexures
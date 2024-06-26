import React from 'react'

import RentalFormClick from '../component/RentalFormClick'

function RentalForm() {

    return (
        <div className='w-screen flex justify-center mt-40'>

            <div>
                <p className='flex justify-center text-4xl text-slate-600 font-medium'>Rent Agreement</p>


                <div className='w-full mt-20   '>
                    <RentalFormClick />
                </div>
            </div>
        </div>
    )
}
export default RentalForm
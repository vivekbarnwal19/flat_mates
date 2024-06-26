import React from 'react'
import { useState } from 'react';
import { Dialog } from '@mui/material'
import DepositeButton from './DepositeButton';

function Deposit() {
  const [showMain, setShowMain] = useState(false);

  const handleClick = () => {
    setShowMain(true);
    // console.log(showMain)
  };

  return (
    <>
      <Dialog open={showMain} onClose={() => setShowMain(false)} ><DepositeButton /></Dialog>
      <div className='max-w-lg mt-60 pl-20 m-20 mb-80'>
        <p className='text-5xl font-semibold '>Don't Want to Pay Security Deposit?</p>
        <p className='text-xl font-light mt-6'>Now with rental bond, your peace of mind is gauranteed!</p>

        <button className='bg-green-500 px-6 py-2 rounded-3xl mt-10 text-white' onClick={handleClick}>Apply Now</button>

      </div>
      <div>

      </div>
    </>
  )
}

export default Deposit
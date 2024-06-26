import React from 'react'
import { useState } from 'react';
import PremiumImg from '../assets/PremiumProperty.jpg'
import PremiumImg2 from '../assets/PremiumProperty2.jpg'
import { Dialog } from '@mui/material';
import PremiumPropertiesButtonClick from './PremiumPropertiesButtonClick';

function PremiumProperties() {
  const [showMain, setShowMain] = useState(false);

  const handleClick = () => {
    setShowMain(true);
    // console.log(showMain)
  };
  return (
    <>
    <Dialog open={showMain} onClose={() => setShowMain(false)} ><PremiumPropertiesButtonClick /></Dialog>
    <div className='bg-slate-200 flex '>
      <div className='max-w-100 pl-40 mb-96 '>
        <p className='text-5xl pt-40'>Are You Looking  For <br /> the Premium Properties?</p>
        <p className='text-xl font-thin text-grey mt-10'>View And Book Your Appointment with our <br /> Partners</p>
        <button className='bg-green-600 px-6 py-2 rounded-3xl text-white text-xl mt-16' onClick={handleClick}>View Properties</button>
      </div>

      <div className='flex gap-6 '>
        <img src={PremiumImg} height={250} width={400}  alt="" className='' />
        <img src={PremiumImg2} height={250} width={400} alt="" />
      </div>
    </div>
    </>
  )
}

export default PremiumProperties
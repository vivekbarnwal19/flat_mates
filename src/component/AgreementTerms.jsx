import React from 'react'

function AgreementTerms() {
    return (
        <div>
            <div className='bg-slate-200 mt-20 border-2 border-solid border-black px-10 py-8 pr-16 leading-10 rounded-lg '>
                <p className='text-2xl font-medium'>Agreement Terms</p>

                <div>
                    <label for="rent" className='text-slate-500'>Monthly Rent*</label>
                    <input className='w-full h-full flex bg-slate-100 px-4 py-2.5' type="number" id="rent"></input>
                </div>

                <div>
                    <label for="security" className='text-slate-500'>Security Deposit*</label>
                    <input className='w-full h-full flex bg-slate-100 border px-4 py-2.5' type="number" id="security" name="security"></input>
                </div>

                <div>
                    <label for="lockinperiod" className='text-slate-500'>Lock In Periods(No. of Months)*</label>
                    <input className='w-full h-full flex bg-slate-100 px-4 py-2.5' type="number" id="lockinperiod" name="lockinperiod"></input>
                </div>

                <div>
                    <label for="noticeperiod" className='text-slate-500'>Notice Periods(No. of Months)*</label>
                    <input className='w-full h-full flex bg-slate-100 px-4 py-2.5' type="number" id="noticeperiod" name="noticeperiod"></input>
                </div>

                <div>
                    <label for="agreementvalid" className='text-slate-500'>Agreement Validity(No. of Months)*</label>
                    <input className='w-full h-full flex bg-slate-100 px-4 py-2.5' type="number" id="agreementvalid" name="agreementvalid"></input>
                </div>

                <div>
                    <label for="agreementdate" className='text-slate-500'>Agreement Start Date*</label>
                    <input className='w-full h-full flex bg-slate-300 px-4 py-2.5' type="date" id="agreementdate" name="agreementdate"></input>
                </div>

                <div>            
                    <label for="agreementdate" className='text-slate-500'>Created By*</label>
                    <select id="createdby" className='w-full h-full flex bg-slate-100 px-4 py-2.5'>
                        <option value="owner">Owner</option>
                        <option value="tenant">Tenant</option>
                    </select>
                </div>

                <div>
                    <label for="email" className='text-slate-500'>Enter Your Email Address*</label>
                    <input className='w-full h-full flex bg-slate-100 px-4 py-2.5' type="email" id="email" name="email"></input>
                </div>

                <div className='flex justify-end'>
                    <button className=' mt-12 bg-green-600 rounded-lg px-10 py-3 text-white'>Save & Continue</button>
                </div>
            </div>
        </div>
    )
}

export default AgreementTerms
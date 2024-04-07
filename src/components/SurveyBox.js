import React from 'react'

const SurveyBox = () => {
  return (
    <div className='bg-[#f4ffff] mt-10 px-10 py-3 flex flex-col md:flex-row items-center justify-center md:justify-between'>
        <div>
            <h4 className='text-xl font-light text-left md:text-xl'>How are we doing?</h4>
            <span className='text-base font-light'>Help improve <strong>PayPal Help Center experience</strong> with some quick feedback</span>
        </div>
        <div>
            <button className="mt-3 bg-blue-800 text-white rounded-full px-4 py-2">Take the survey</button>
        </div>
    </div>
  )
}

export default SurveyBox
import React from 'react'
import Search from './Search'
import Alert from './Alert'
import Cards from './Cards'
import Faqs from './Faqs'
import MoreWays from './MoreWays'
import SurveyBox from './SurveyBox'

const Body = () => {

    const removeAlert=()=>{
        let list = document.getElementById('alert')
        list.classList.add('hidden');

    }
  return (
    <div className='mx-2 md:mx-16 flex-col justify-center items-center'>
    <Search/>
    <div id='alert' className="">
         <Alert  removeAlert={removeAlert}/>
    </div>
    <Cards/>
    <Faqs/>
    <MoreWays/>
    <SurveyBox/>
    </div>
  )
}

export default Body
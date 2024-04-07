import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Alert = (props) => {
  return (
    <div> 
        
        <div className="mx-10 flex  w-fit container bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 justify-center " role="alert" >
    <p>
      Received a suspicious email, fake invoice, or message? Don't reply, open links, download attachments, or call
      any listed phone numbers. We'll never ask for your PayPal password or financial details by email or message,
      or over the phone. Forward suspicious messages to{" "}
      <a href="/" className="text-blue-500">
        phishing@paypal.com
      </a>{" "}
      and then delete them.
    </p>
    <FontAwesomeIcon className='cursor-pointer' onClick={props.removeAlert} icon={faXmark}/>
  </div>
  </div>
  )
}

export default Alert
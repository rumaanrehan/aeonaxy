import React from 'react'
import { faHandsHoldingCircle, faMessage, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Cards = () => {
    
    const cardDetails=[
        {
            image: faPeopleGroup,
            title: "Resolution Center",
            description: "Resolve transaction or account issues"
        },
        {
            image: faHandsHoldingCircle,
            title: "Ask the Community",
            description: "Find answers or join the conversation"
        },
        {
            image: faMessage,
            title: "Message Center",
            description: "Send, recieve, and view your PayPal messages"
        }
    ]

  return (
    <div className='mx-0 md:mx-5  flex flex-col justify-center lg:flex-row '>
        {cardDetails.map((card)=>{
            return (
                <div className="mt-5 mx-5 md:w-96 lg:w-80 rounded-lg border bg-white p-4 shadow-md">
                <div className="flex items-center space-x-4">
                    <span className="relative flex h-10 w-10 bg-grey-100 rounded-full">
                        <FontAwesomeIcon className='aspect-square h-10 w-10' icon={card.image}/>
                    </span>
                    <div>
                        <h5 className="lg:text-base font-semibold">{card.title}</h5>
                        <p className="md:text-xs lg:text-sm text-gray-600">{card.description}</p>
                    </div>
                </div>
            </div>     
            )
        })}
        
    </div>
  )
}

export default Cards

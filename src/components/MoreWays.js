import React from 'react'
import { faHandshake, faComment, faPeopleArrows} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MoreWays = () => {
    const moreWaysDetails=[
        {
          image: faPeopleArrows,
          title: "Community Forum",
          description: "Find answers or join the conversation"
        },
        {
          image: faHandshake,
          title: "Resolution Center",
          description: "Resolve transactions or account issues"
        },
        {
          image: faComment,
          title: "Contact us",
          description: "Contact Customer Service"
        }
      ];

    return (
        
      <div className='mt-7'>
        <h2 className="font-light text-center text-xl md:text-2xl">More ways to get help</h2>
        <div className='flex flex-col md:flex-row items-center justify-center'>

{       
  moreWaysDetails.map((details)=>{

    return(
      <div className="mt-5 mx-5 md:w-96 lg:w-80 bg-white p-4">
            <div className="flex-col space-x-4">
                <span className="relative flex mb-5 rounded-full">
                  <FontAwesomeIcon className='h-10 container' icon={details.image}/>
                </span>
                <div className='text-center'>
                    <h5 className="lg:text-base font-semibold text-blue-600 text-nowrap whitespace-nowrap">{details.title}</h5>
                    <p className="md:text-xs lg:text-sm text-gray-600">{details.description}</p>
                </div>
            </div>
        </div>
    )})}
        </div>
      </div>

  )
}

export default MoreWays

//  {
//   moreWaysDetails.map((details)=>{
//     console.log(details.description)
//     return <MoreWaysCards details={details} />})
// } 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Search = () => {
  return (
    <div>
        <div className="">
          <span className=" mt-4 hidden md:block text-sm font-medium leading-tight text-blue-500">Help Center</span>
            <div className=" lg:max-w-7xl mx-auto py-12 px-4 sm:px-3 lg:px-8 flex flex-col items-start lg:items-center">
              <div className="mt-1">
                <h2 className="text-2xl font-bold lg:text-center leading-tight text-gray-900">How can we help?</h2>
                <form className="mt-6 flex lg:justify-center">
                  <div className="min-w-0 flex items-center">
                    <FontAwesomeIcon className="text-gray-500 h-7 mr-3" icon={faMagnifyingGlass}/>
                    {/* <label htmlFor="search" className="sr-only"></label> */}
          <input className="h-10 px-10 w-[20rem] lg:w-[36rem] border py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 block max-w-lg border-gray-300 rounded-3xl" id="search" placeholder="Search by keyword"type="search"/>
            </div>
      </form>
      </div>
    </div>
  </div>
  
    </div>
  )
}

export default Search
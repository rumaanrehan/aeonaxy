import React from 'react'

const Faqs = () => {


return (
<>
  <div className='flex flex-col my-5 items-center justify-center md:mx-10 md:items-stretch lg:flex-row'>
    <div className=" bg-gray-200 mt-5 mb-4 rounded-3xl justify-between shadow-md p-0.5 inline-flex md:space-x-7 lg:w-auto">
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-xs font-medium disabled:pointer-events-none hover:bg-primary/90 h-8 bg-white text-blue-900 px-2">
          Personal Help
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-8 text-gray-600 bg-gray-200 px-4 py-2">
          Business Help
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-8 text-gray-600 bg-gray-200 rounded-r-lg px-4 py-2">
          Technical Help
      </button>
    </div>
  </div>
  <div className='flex flex-col my-5 md:flex-row justify-between'>
      <div className="w-full md:w-fit bg-white order-3 md:order-1 mt-6 text-gray-700">
        <ul className="space-y-3 text-lg md:text-sm">
          <li className="hidden md:block text-blue-800 hover:text-blue-800 bg-blue-200 py-1 px-1 pr-8 border-l-4 border-blue-800">
            <a href="/" className="block">Common Questions</a>
            </li>
          <li className=" hover:text-blue-600"><a href="/" className="block">PayPal Help Guides</a></li>
          <li className=" hover:text-blue-600"><a href="/" className="block">Payments &amp; Transfers</a></li>
          <li className=" hover:text-blue-600"><a href="/" className="block">Disputes &amp; Limitations</a></li>
          <li className=" hover:text-blue-600"><a href="/" className="block">My Account</a></li>
          <li className=" hover:text-blue-600"><a href="/" className="block">My Wallet</a></li>
          <li className=" hover:text-blue-600"><a href="/" className="block">Login &amp; Security</a></li>
          <li className=" hover:text-blue-600"><a href="/" className="block">Seller Tools</a></li>
        </ul>
      </div>

      <div className="bg-white order-1 md:order-2 text-black p-6">
        <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
        <ul className=" space-y-2 text-blue-600 font-medium">
          <li>How do I open a case with a seller?</li>
          <li>I forgot my password. How do I reset it?</li>
          <li>Why is my payment on hold or unavailable?</li>
          <li>I want my money back. Can I cancel a payment?</li>
          <li>Why am I receiving emails from PayPal when I don't have an account?</li>
          <li>How do I report an unauthorized transaction or account activity?</li>
          <li>Why is the payment I sent pending? Can I cancel it?</li>
          <li>How do I request a refund?</li>
          <li>Why was my payment declined?</li>
          <li>How do I change the name on my PayPal account?</li>
        </ul>
      </div>
    
      <div className="w-full md:w-[250px] md:h-[250px] order-2 md:order-3">
      <div className="rounded-lg flex flex-col justify-center items-center space-y-2 bg-[#f9ffff] h-[180px] text-card-foreground shadow-md p-0" data-v0-t="card">
        <div className="space-y-1.5 p-6 border-0 pb-0">
          <h3 className="font-normal whitespace-wrap tracking-tight text-center text-balance leading-none">
            Get customized help with your account and access your message center.
          </h3>
        </div>
        <div className="p-0">
          <button className="flex text-blue-800 items-center whitespace-nowrap   disabled:pointer-events-none disabled:opacity-50 bg-primary  h-9 px-6 py-2 border-2 border-blue-800 rounded-full text-sm font-medium">
            Log In
          </button>
        </div>
      </div>
</div>
</div>
        
 </>
  )
}

export default Faqs
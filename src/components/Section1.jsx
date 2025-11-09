
function Section1() {
  return (
      <div className='container mx-auto py-3 flex items-center justify-between'>
      <div className='btn flex  gap-5  '>

        <button className="flex border border-solid border-amber-100 px-1 py-1 hover:scale-110 transition-transform duration-300">
          <img className=" h-5 w-100%" src="./public/icon-1.png" alt="img-1" />
          <p>Creative Fields </p> 
          <img className=" px-2 w-100% h-2  " src="./public/images/icon-2.png" alt="icon2" />                            
        </button>
        <button className="hover:scale-110 transition-transform duration-300 flex border border-solid border-amber-100 px-1 py-1">
          <img className=" h-5 w-100%" src="public/images/icon-3.png" alt="img-2" />
          <p>Tools </p> 
          <img className=" px-2 w-100% h-2  " src="./public/images/icon-2.png" alt="icon2" />                            
        </button>
        <button className="hover:scale-110 transition-transform duration-300 flex border border-solid border-amber-100 px-1 py-1">
          <img className=" h-5 w-100%" src="public/images/icon-4.png" alt="img-1" />
          <p> Color </p> 
          <img className=" px-2 w-100% h-2  " src="./public/images/icon-2.png" alt="icon2" />                            
        </button>
        <button className=" hover:scale-110 transition-transform duration-300 flex border border-solid border-amber-100 px-1 py-1">
          <img className=" h-5 w-100%" src="public/images/icon-6.png" alt="img-1" />
          <p>Schools </p> 
          <img className=" px-2 w-100% h-2  " src="./public/images/icon-2.png" alt="icon2" />                            
        </button>
        <button className="hover:scale-110 transition-transform duration-300 flex border border-solid border-amber-100 px-1 py-1">
          <img className=" h-5 w-100%" src="public/images/icon7.png" alt="img-1" />
          <p>Assets </p> 
          <img className=" px-2 w-100% h-2  " src="./public/images/icon-2.png" alt="icon2" />                            
        </button>
        <button className="hover:scale-110 transition-transform duration-300 flex border border-solid border-amber-100 px-1 py-1">
          <img className=" h-5 w-100%" src="public/images/icon-8.png" alt="img-1" />
          <p>Subscriptionss </p> 
          <img className=" px-2 w-100% h-2  " src="./public/images/icon-2.png" alt="icon2" />                            
        </button>
        
      </div>
      <div>
        <p>Sort</p>
        <div className="flex">
          <p>Recommended</p> <img className=" px-2 w-100% h-2 " src="./public/images/icon-2.png" alt="img" />
        </div>
      </div>
      
    </div>
  )
}

export default Section1

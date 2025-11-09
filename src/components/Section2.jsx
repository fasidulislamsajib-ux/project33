

function Section2() {
  return (
   <div className=" container mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
   <div className="h-64 w-full hover:scale-110 transition-transform duration-600">

      <div className=""><img className="h-70" src="./image-1.jpg" alt="img1" /></div>

      <div className="flex justify-between items-center">
        <div>
        <h3 className="">2d Arcade style experiments</h3>
        <span>ARCADE STUDIO</span>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-1 cursor-pointer">
        <img src="./public/images/icon-10.jpg" alt="icon10" />
        <p>90</p>
      </div>
      <div className="flex items-center justify-center cursor-pointer gap-1 ">
        <img className="h-3" src="./public/images/icon-11.jpg" alt="icon11" />
        <p>105</p>
      </div>
      </div>
      </div>
    </div>
   <div className="h-80 w-80 bg-amber-50 bordeer container mx-auto hover:scale-110 transition-transform duration-600">

      <div className=""><img className="h-70" src="./public/images/image-2.png" alt="img1" /></div>

      <div className="flex justify-between items-center">
        <div>
        <h3 className="">Fashion Illustration Vol.22</h3>
        <span>SEUNGWON HONG</span>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-1 cursor-pointer">
        <img src="./public/images/icon-10.jpg" alt="icon10" />
        <p>90</p>
      </div>
      <div className="flex items-center justify-center cursor-pointer gap-1 ">
        <img className="h-3" src="./public/images/icon-11.jpg" alt="icon11" />
        <p>105</p>
      </div>
      </div>
      </div>
    </div>
   <div className="h-80 w-80 bg-amber-50 bordeer container mx-auto hover:scale-110 transition-transform duration-600">

      <div className=""><img className="h-70" src="./public/images/image-3.jpg" alt="img1" /></div>

      <div className="flex justify-between items-center">
        <div>
        <h3 className="">A search for mother</h3>
        <span>Bade Fuwa</span>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-1 cursor-pointer">
        <img src="./public/images/icon-10.jpg" alt="icon10" />
        <p>90</p>
      </div>
      <div className="flex items-center justify-center cursor-pointer gap-1 ">
        <img className="h-3" src="./public/images/icon-11.jpg" alt="icon11" />
        <p>105</p>
      </div>
      </div>
      </div>
    </div>
   <div className="h-80 w-80 bg-amber-50 bordeer container mx-auto hover:scale-110 transition-transform duration-600">

      <div className=""><img className="h-70" src="./public/images/image-4.png" alt="img1" /></div>

      <div className="flex justify-between items-center">
        <div>
        <h3 className="">Cow Cow Cow!</h3>
        <span>Multiple Owners</span>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-1 cursor-pointer">
        <img src="./public/images/icon-10.jpg" alt="icon10" />
        <p>90</p>
      </div>
      <div className="flex items-center justify-center cursor-pointer gap-1 ">
        <img className="h-3" src="./public/images/icon-11.jpg" alt="icon11" />
        <p>105</p>
      </div>
      </div>
      </div>
    </div>

        {/* div */}
        <div className=" bg-amber-50 h-80 w-320 py-2 grid grid-cols-4 g ">
    
           <div className=" w-80 hover:scale-110 transition-transform duration-600">
             <div className="h-70  px-3.5 ">
                <h1 className="font-black py-2.5 ">Create with Creative Cloud</h1>
                <p className="py-5">Whatever you want to create, Adobe Creative Cloud has what you need to make it amazing.</p>
                <button className="h-9 px-2  font-medium cursor-pointer bg-blue-700 rounded-2xl text-[#fcfcfc]" >See all plans</button>
            </div>
           </div>
             <div className="w-80 hover:scale-110 transition-transform duration-600">
            <div className="py-5 px-2 items-center"> 
                <img className="h-40 w-100%" src="./public/images/img1.jpg" alt="img" /></div>
            <div>
                <div className="flex gap-3">
                    <img className="h-15  w-100% py-2" src="./public/images/icon-21.png" alt="" />
                <div className="w-100%">
                    <h2 className="font-extrabold py-3">Creative Cloud All Apps</h2>
                    <p >Easily create stunning social graphics, short videos, and web pages that make you stand out.</p>
                    </div>

                    </div>
            </div>
          </div>
             <div className="w-80 hover:scale-110 transition-transform duration-600">
            <div className="py-5 items-center"> 
                <img className="h-40 w-100%" src="./public/images/img2.jpg" alt="img" /></div>
            <div>
                <div className="flex gap-3">
                    <img className="h-15  w-100% py-2" src="./public/images/icon-21.png" alt="" />
                <div className="w-100%">
                    <h2 className="font-extrabold py-3">Creative Cloud All Apps</h2>
                    <p >Easily create stunning social graphics, short videos, and web pages that make you stand out.</p>
                    </div>

                    </div>
            </div>
          </div>
             <div className="w-80 hover:scale-110 transition-transform duration-600 ">
            <div className="py-5 items-center"> 
                <img className="h-40 w-100%" src="./public/images/img3.jpg" alt="img" /></div>
            <div>
                <div className="flex gap-3">
                    <img className="h-15  w-100% py-2" src="./public/images/icon-21.png" alt="" />
                <div className="w-100%">
                    <h2 className="font-extrabold py-3">Creative Cloud All Apps</h2>
                    <p >Easily create stunning social graphics, short videos, and web pages that make you stand out.</p>
                    </div>

                    </div>
            </div>
          </div>
         
           </div>
        </div>
   )
}

export default Section2



function Footer() {
  return (
    <div className="container mx-auto gap-3 py-4 pb-30">
      <div className="flex justify-between">
        <div>
            <ul className="flex gap-5 font-medium text-1xl text-amber-900">
                <li className="hover:scale-110 transition-transform duration-600 "><a href="#">More Behance</a></li>
                <li  className="hover:scale-110 transition-transform duration-600 "><a href="#">More Behance</a></li>
                <li  className="hover:scale-110 transition-transform duration-600 "><a href="#">More Behance</a></li>
                <li  className="hover:scale-110 transition-transform duration-600 "><a href="#">More Behance</a></li>
                <li  className="hover:scale-110 transition-transform duration-600 "><a href="#">More Behance</a></li>
                <li  className="hover:scale-110 transition-transform duration-600 "><a href="#">More Behance</a></li>
                <li  className="hover:scale-110 transition-transform duration-600 "><a href="#">More Behance</a></li>
                <li  className="hover:scale-110 transition-transform duration-600 "><a href="#">More Behance</a></li>
            </ul>
        </div>
        <div className="flex gap-2 h-3 cursor-pointer w-20 hover:scale-110 transition-transform duration-600 ">
          <img src="./images/logo1.svg" alt="" />
          <img src="./images/icon-2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer

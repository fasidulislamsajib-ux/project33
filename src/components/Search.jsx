
function Search() {
  return (
    <form> 
        <div className="container mx-auto flex justify-between">
            <div className="flex  gap-4  rounded-2xl bg-gray-200 pr-105">
                <button className="pl-2 w-6 cursor-pointer" >
            <img src="./public/images/search-icon.png" alt="" />
        </button>
        <input  type="search" placeholder="Search the Creativ World at Wordk" />

            </div>
            <div className=" border-amber-300 rounded-2xl  px-5 flex items-center justify-center m-1">
                <ul className="flex gap-8 font-bold"> 
                    <li className="bg-black text-amber-50 py-1.5 px-1.5 rounded-2xl"><a href="https://www.bing.com/search?qs=SC&pq=web+projex&sk=CSYN1SC1&sc=10-10&pglt=2339&q=web+project+ideas&cvid=3bd50d8113164c04828a09a3dd05636e&gs_lcrp=EgRlZGdlKgYIAhAAGEAyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQkxMDQ3OWowajGoAgCwAgA&FORM=ANNTA1&PC=U531">Projects </a></li>
                    <li><a href="https://www.bing.com/search?pglt=2339&q=image&cvid=bf40ee85e9cd4420b6d8a1c758819b82&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQgxMzQzajBqMagCALACAA&FORM=ANNTA1&PC=U531">Images </a></li>
                    <li><a href="#">Prototypes </a></li>
                    <li><a href="https://www.twitch.tv/directory">Streams </a></li>
                    <li><a href="https://islamtics.com/sallallahu-alaihi-wasallam-saw-meaning/">People </a></li>
                    <li><a href="https://www.bing.com/search?pglt=2339&q=Moodboards&cvid=98f38620f8d340b4b1f05b120106c173&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQgxNDUzajBqMagCCLACAQ&FORM=ANNTA1&PC=U531">Moodboards </a></li>
                </ul>
            </div>
        </div>
      
    </form>
  )
}

export default Search

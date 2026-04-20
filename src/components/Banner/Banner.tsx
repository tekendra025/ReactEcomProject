import { CollectionImg } from "../../image"

const Banner = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 lg:py-14">
      <div className="container">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* left side  */}
            <div className="dark:text-white space-y-4 text-center lg:text-left">
                <div>
                 <span className="section-btn">Limited Timer Offer</span>
                </div>
                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Summer Sale
                  <span className="text-primary block">Up to 50% off</span>
                 </h1>
                 <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-lg 
                 mx-auto lg:mx-0">
                    Grab Your favorite styles before they're gone.
                    Premium quality fashion at unbeatable prices.
                 </p>
     
                 <div className="flex flex-col lg:flex-row gap-3">
                    <button className="primary-btn">Shop Now</button>
                    <button className="secondary-btn">View Collection</button>
                 </div>
            </div>

            {/*  right side*/}
            <div className="relative">
                 <div className=" bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-2xl shadow-xl ">
                    <img src={CollectionImg} alt="Collection Image"
                    className="w-full max-h-70 lg:max-h-95 object-contain mx-auto hover:scale-105 duration-500"
                    />
                    <div className="absolute bg-primary right-4 top-2 lg:right-0
                    h-12 w-12 lg:h-20 lg:w-20 flex justify-center items-center 
                    text-xs lg:text-base font-bold rounded-full">
                        50% <br />
                        OFF
                    </div>
                 </div>
            </div>
           </div>
      </div>
    </div>
  )
}

export default Banner

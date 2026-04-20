import { CollectionImg2 } from "../../image"

const About = () => {
  return (
 <>
  <span id="about"></span>
    <div className="bg-white dark:bg-gray-800 py-10 lg:py-14">
      <div className="container">
        <div className="text-center lg:text-start">
          <span className="section-btn">Why Choose Us</span>
          <h1 className="mt-2 mb-8 text-3xl md:text-4xl lg:text-5xl dark:text-white font-bold">Your Trusted <span className="text-primary">Fashion Partner</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
          {/* left side */}
           <div className="relative">
               <div>
                  <img src={CollectionImg2} alt="Collection Image 2"
                   className="max-h-75 lg:max-h-125 w-full object-cover rounded-xl lg:rounded-2xl"
                  />
                  <div className="absolute bg-white -bottom-4 -right-2 lg:-bottom-6 lg:-right-6
                   dark:bg-gray-800 shadow-2xl rounded-xl lg:rounded-2xl p-4 lg:p-6 ">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary h-12 w-12 flex justify-center items-center rounded-xl font-bold dark:text-white">+5</div>
                      <div>
                        <p className="font-bold dark:text-white">Years</p>
                        <p className="font-bold text-sm text-gray-400">Experience</p>
                      </div>
                    </div>
                  </div>
               </div>
           </div>

          {/* right side */}
          <div className="space-y-4 lg:space-y-6 text-justify ">
              <h3 className="text-2xl text-center lg:text-start lg:text-4xl font-bold dark:text-white">Quality Fashion for Everyone</h3>
              <p className="dark:text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea labore quisquam, laboriosam tenetur adipisci temporibus nam cupiditate itaque neque?</p>
              <p className="dark:text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea labore quisquam, laboriosam tenetur adipisci temporibus nam cupiditate itaque neque?</p>
              <div className="flex flex-col gap-2 lg:flex-row">
                <button className="primary-btn">Explore Store</button>
                <button className="secondary-btn">Contact Us</button>
              </div>
          </div>
        </div>
      </div>
    </div>
 </>
  )
}

export default About

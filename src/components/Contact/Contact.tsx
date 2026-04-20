import { ContactInfo } from "../../constant/Contact"

const Contact = () => {
  return (
<>
 <span id="contact"></span>
     <div className="bg-white dark:bg-black py-10 lg:py-14 dark:text-white">
      <div className="container">

          <div className="text-center mb-10 lg:mb-14 ">
            <span className="section-btn">Get In Touch</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">Contact Us</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
            {/* left side */}
            <div className="lg:col-span-2  space-y-4 lg:space-y-6 ">
                <p className="text-gray-600 dark:text-gray-400 text-center lg:text-start">Have questions about our products? We're here
                    to help!
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
                    {ContactInfo.map((item)=>(
                        <div key={item.id} className="group flex items-center gap-3 lg:gap-4
                        bg-gray-100 dark:bg-gray-900 p-3 lg:p-4 rounded-xl lg:rounded-2xl 
                        border border-gray-100 dark:border-gray-800 hover:border-primary duration-500">
                              <div className="h-10 w-10 lg:h-14 lg:w-14 bg-primary flex items-center justify-center rounded-xl group-hover:scale-110 duration-500">
                                <item.icon className="dark:text-white text-sm lg:text-lg "/>
                              </div>
                              <div>
                                <p className="font-bold text-xs lg:text-base ">{item.title}</p>
                                <p className=" text-gray-600 dark:text-gray-400 text-xs lg:text-base ">{item.value}</p>
                              </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* right side */}
            <div className="lg:col-span-3">
                <div className="bg-gray-50 dark:bg-gray-900 p-5 lg:p-8 rounded-xl lg:rounded-2xl">
                    <h3 className="text-xl lg:text-2xl font-bold text-center lg:text-left mb-4 lg:mb-6 ">Send Us a <span className="text-primary">Message</span></h3>
                    
                    <form action="" className=" space-y-4 lg:space-y-5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
                            <input type="text" placeholder="Your  Name" 
                            className="w-full px-4 py-3 lg:py-4 rounded-lg lg:rounded-2xl
                             border-2 dark:border-gray-800 focus:outline-none focus:border-primary duration-500 "/>
                            <input type="email" placeholder="Your Email" 
                            className="w-full px-4 py-3 lg:py-4 rounded-lg lg:rounded-2xl
                             border-2 dark:border-gray-800 focus:outline-none focus:border-primary duration-500 "
                            />
                        </div>
                            <input type="text" placeholder="Your Subject" 
                            className="w-full px-4 py-3 lg:py-4 rounded-lg lg:rounded-2xl
                             border-2 dark:border-gray-800 focus:outline-none focus:border-primary duration-500 "
                            />
                            <textarea name="" id="" placeholder="Your Message"
                            className="w-full px-4 py-3 lg:py-4 rounded-lg lg:rounded-2xl
                             border-2 dark:border-gray-800 focus:outline-none focus:border-primary duration-500 
                             resize-none ">    
                            </textarea>
                            <button className="primary-btn w-full px-4 py-3 lg:py-4 rounded-lg ">Send Message</button>
                    </form>
                </div>
            </div>
          </div>   
      </div>
    </div>
</>
  )
}

export default Contact
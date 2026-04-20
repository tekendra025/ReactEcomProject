import { Services } from "../../constant/Service"

const Service = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 lg:py-14">
      <div className="container">

        <div className="mb-10 lg:mb-16 text-center lg:text-left">
          <span className="section-btn">Our Categories</span>
          <h1 className="text-2xl lg:text-5xl font-bold mt-4 dark:text-white">Shop By <span className="text-primary">Category</span></h1>
        </div>

        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {Services.map((item)=>(
            <div key={item.id} className="group bg-white dark:bg-black dark:text-white rounded-xl 
            lg:rounded-2xl p-4 lg:p-8 border border-gray-100 dark:border-gray-800 hover:border-primary duration-500 
            hover:shadow-2xl space-y-4 ">
              <div className="bg-primary/10 h-12 w-12 lg:h-16 lg:w-16 rounded-xl flex justify-center items-center group-hover:bg-primary duration-500">
                 <item.icon  className="text-xl lg:text-2xl text-primary group-hover:text-white duration-500 "/>
              </div>
              <h3 className="font-bold text-sm lg:text-xl group-hover:text-primary duration-500">{item.title}</h3>
              <div>
                <span className="text-xl lg:text-3xl font-bold text-primary">{item.price}</span>
                <span className="text-gray-500 text-xs lg:text-sm font-bold">{item.duration}</span>
              </div>
              
              <ul className="space-y-2">
                {item.description.map((des, index)=>(
                      <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-3">
                        <span className="h-5 w-5 bg-primary/10 rounded-full flex justify-center items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        </span>
                        {des}</li>
                ))}
              </ul>
              <button className="primary-btn w-full">Shop Now</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Service

import HeroImage from '../../assets/images/Banner2.jpg'

const Hero = () => {
  return (
    <>
     <div>
        <div className='relative w-full h-125 overflow-hidden'>
      {/* background image */}
      <img
        src={HeroImage}
        alt="Hero"
        className="absolute w-full h-full object-cover"
      />

       {/* Dark Overlay */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/40"></div>
        
        {/* left side */}
        <div className='absolute top-1/2 left-5 text-white'>
          <button className="bg-primary px-4 py-2 rounded-4xl font-semibold cursor-pointer">New Arrivals 2026</button>
          <h2 className='text-3xl font-bold my-3'>Discover Your Perfect Style</h2>
          <p className=' text-gray-300 mb-5'>explore our latest collection of trendy fashion. Quality meets affordability</p>
         
          <div className='flex gap-3'>
             <button className="bg-primary px-4 py-2 rounded-md font-semibold cursor-pointer">Shop Now</button>
             <button className=" border-2 rounded-md px-4 py-2 font-semibold cursor-pointer">View collection</button>
          </div>
        </div>
      </div>
     </div>
    
    </>
  )
}

export default Hero

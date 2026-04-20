import { BannerImg } from '../../image'

const HeroSection = () => {
  return (
    <div className='relative h-[500px] md:h-[600px]'>
        <img src={BannerImg} alt="image" className='h-full w-full object-cover absolute'/>
      <div className=' absolute  inset-0 bg-white/10 dark:bg-black/50'>
        <div className=' container flex h-full items-center'>
          <div className='space-y-4 text-white'>
   
              <span className='section-btn'>New Arrivals 2026</span>
              <h1 className='mt-3 text-3xl md:text-4xl lg:text-5xl font-bold'>Discover Your Perfect Style</h1>
              <p className='text-sm md:text-md text-gray-300'>explore our latest collection of trendy fashion. Quality meets affordability.</p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <button  className='primary-btn'>shop now</button>
                <button className='secondary-btn'>view collection</button>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

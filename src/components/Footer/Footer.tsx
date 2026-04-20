import { ContactInfo } from "../../constant/Contact";
import { Categories, SocialLinks } from "../../constant/Footer";
import { NavLInk } from "../../constant/NavLink";
import { Logo } from "../../image";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10 lg:py-12">
      <div className="container">
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <img src={Logo} alt="image" className="w-20" />
              <p className="text-gray-400">
                Your one-stop destination for trendy fashion. Quality meets
                style.
              </p>

              <div className="flex gap-2 lg:gap-3 justify-center lg:justify-start">
                {SocialLinks.map((item) => (
                  <a key={item.id} href={item.link} className="h-8 w-8 lg:h-9 lg:w-9 bg-gray-800
                  flex justify-center items-center hover:bg-primary rounded-xl duration-500">
                    <item.icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-bold text-base lg:text-xl mb-3 lg:mb-4">quick links</h3>

              <ul className="space-y-1.5 lg:space-y-2">
                {NavLInk.map((item)=>(
                  <li key={item.id}>
                    <a href={item.path}
                    className="text-gray-400 hover:text-primary duration-500 text-sm lg:text-base">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div> 



            <div className="text-center lg:text-left">
              <h3 className="font-bold text-base lg:text-xl mb-3 lg:mb-4">Categories</h3>

              <ul className="space-y-1.5 lg:space-y-2">
                {Categories.map((item)=>(
                  <li key={item.id}  className="text-gray-400 hover:text-primary duration-500 text-sm lg:text-base">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>


            <div className="text-center lg:text-left"> 
              <h3 className="font-bold text-base lg:text-xl mb-3 lg:mb-4">ContactInfo</h3>

              <ul className="space-y-1.5 lg:space-y-2">
                {ContactInfo.map((item)=>(
                  <li key={item.id}  className="text-gray-400 hover:text-primary duration-500 text-sm lg:text-base">
                    {item.value}
                  </li>
                ))}
              </ul></div>
          </div>

          {/* copyright */}
          <div className="border-t border-gray-800 mt-8 lg:mt-10 text-center p-4 lg:p-6 text-sm lg:text-base">
            <p> 
              &copy;{new Date().getFullYear()}Fashion Store. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { NavLInk } from "../../constant/NavLink"
import { Logo } from "../../image"

type ResponsiveMenuProps = {
  showMenu: boolean
}

const Responsive = ({showMenu}: ResponsiveMenuProps) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-full"} 
    fixed top-0 flex flex-col bg-white dark:bg-gray-900 dark:text-white
    h-screen w-[75%] px-8 py-8 z-50`}>
      <div className="mt-10">
        <img src={Logo} alt="logo" className="w-20"/>
        <div>
          <ul className="flex flex-col gap-5">
            {NavLInk.map((item)=>(
              <li key={item.id} className="text-lg font-semibold hover:text-primary
              duration-500 border-b border-gray-100 dark:border-gray-800 pb-10">
                <a href={item.path}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
        <div className="mt-auto">
          {/* <button className="bg-yellow-500 px-5 py-2 font-semibold rounded-lg capitalize">Join now</button> */}
          <button className="bg-primary px-5 py-2 font-semibold rounded-lg capitalize">Join now</button>
        </div>
    </div>
  )
}

export default Responsive

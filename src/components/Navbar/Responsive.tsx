import { NavLInk } from "../../constant/NavLink"
import { Logo } from "../../image"
type ResponsiveMenuPropes= {
    showMenu: boolean
}

const Responsive = ({showMenu}:ResponsiveMenuPropes) => {
  return (
    <div className={`${showMenu  ? "left -0" : "left-[-100%]"}
    fixed top-0 flex flex-col bg-white dark:bg-gray-900 dark:text-white h-screen w-[75%] px-8 py-8 z-50`}>
        <div className="mt-10">
            <img src={Logo} alt="" className="w-20"/>
            <div>
                <ul className="flex  flex-col gap-5">
                    {NavLInk.map((item)=>(
                        <li key={item.id} className="text-lg font-semibold hover:text-primary
                        duration-500 border-b border-gray-100 dark:border-gray-800 pb-10">
                            <a href={item.path}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
            <div className="mt-auto">
                <button className="bg-primary px-5 py-2 font-semibold rounded-lg capitalize">join now</button>
            </div>
    </div>
  )
}

export default Responsive

import { useState } from "react"
import { BarsIcon, BrightnessIcon, MoonIcon, XMarkIcon } from "../shared/Icons"
import ProfileDropDown from "./ProfileDropDown"


const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuState, setMenuState] = useState(false)


  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "#" },
    { title: "Projects", path: "#" },
    { title: "About", path: "#" },
    { title: "Services", path: "#" },
  ]


  return (
    <nav className="dark:bg-slate-800 bg-slate-50 border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto">
        <div className="flex-none lg:flex-initial">
          <p className="dark:text-slate-300 text-2xl text-slate-800  font-bold">Portfolio Site</p>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className={`dark:bg-slate-800 bg-slate-50 absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {
                navigation.map((item, idx) => (
                  <li key={idx} className="dark:text-slate-300 dark:hover:text-white text-gray-600 hover:text-gray-900">
                    <a href={item.path}>
                      {item.title}
                    </a>
                  </li>
                ))
              }
            </ul>

            {/*  medium & mobile device */}
            <ProfileDropDown
              class="mt-5 pt-5 border-t lg:hidden"
            />
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex items-center space-x-2 border rounded-md p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                className="dark:bg-slate-800 bg-slate-50 w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form>

            {/* large device size */}
            <ProfileDropDown
              class="hidden lg:block z-50"
            />

            {/* sidebar indicator medium & mobile device */}
            <button className="outline-none text-gray-400 block lg:hidden" onClick={() => setMenuState(!menuState)}>
              {
                menuState ? (
                  <XMarkIcon />
                ) : (
                  <BarsIcon />
                )
              }
            </button>
          </div>
          <div onClick={() => setDarkMode(!darkMode)} className="flex mx-4 cursor-pointer shadow-2xl">
            {
              darkMode ?
                <MoonIcon />
                :
                <BrightnessIcon />
            }



          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
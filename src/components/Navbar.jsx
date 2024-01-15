import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [name, setname] = useState("menu");
  function menu() {
    const list = document.querySelector("#menuBar");

    name === "menu"
      ? (setname("close"),
        list.classList.add("top-[50px]"),
        list.classList.add("opacity-100"))
      : (setname("menu"),
        list.classList.remove("top-[50px]"),
        list.classList.remove("opacity-100"));
  }

  return (
    <>
      <nav className="bg-white shadow flex items-center justify-between h-[10vh] w-full mb-8">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-black cursor-pointer ml-4 first-letter:text-5xl first-letter:text-purple-900 hover:first-letter:text-black hover:text-purple-900 transition-all duration-150 ease-in">
            <Link to="/"> Rule 34</Link>
          </span>

          <span className="text-3xl mx-2 cursor-pointer md:hidden block text-black">
            <ion-icon name="menu-outline" onClick={menu}></ion-icon>
          </span>
        </div>

        <ul
          id="menuBar"
          className="md:flex md:items-center md:gap-6 z-auto md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in"
        >
          <li className="text-xl md:mt-0 mt-5 text-black hover:text-purple-700 cursor-pointer duration-400">
            <Link to="/">HOME</Link>
          </li>
          <li className="text-xl md:mt-0 mt-5 text-black hover:text-purple-700 cursor-pointer duration-400">
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li className="text-xl md:mt-0 mt-5 text-black hover:text-purple-700 cursor-pointer duration-400">
            ABOUT US
          </li>
          <li className="text-xl md:mt-0 mt-5 mb-3 md:mb-0 text-black hover:text-purple-700 cursor-pointer duration-400 mr-4">
            CONTACT US
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

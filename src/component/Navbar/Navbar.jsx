import logo from "../../assets/logo.png";
import moon from "../../assets/moon.png";
import right from "../../assets/right.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <img className="w-24 cursor-pointer mr-14" src={logo} alt="Logo" />

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-50 text-lg font-semibold">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skill</a>
          </li>
          <li>
            <a href="#">My Work</a>
          </li>
          <li>
            <a href="#">Education</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* <button>
            <img src={moon} alt="Moon" className="w-6" />
            <img src={moon} alt="Moon" className="w-6" />
          </button> */}

          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 text-lg font-semibold"
            href="#"
          >
            Contact
            <img className="w-3" src={right} alt="Right Arrow" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img src={menu} alt="Menu" className="w-6" />
          </button>
        </div>

        <ul
          id="sideMenu"
          className={`${
            menuOpen ? "right-0" : "-right-64"
          } flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500`}
        >
          <div className="absolute right-6 top-6">
            <img src={close} alt="Close" className="w-5" onClick={closeMenu} />
          </div>
          <li>
            <a href="#" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Education
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

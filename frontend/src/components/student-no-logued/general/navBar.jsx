import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <>
      <nav className="bg-[#141414] fixed top-0 left-0 w-full z-50 py-3.5 px-3 md:px-2 border-b-2 border-[#ffffff]">
        <div className="flex flex-wrap items-center justify-between">
          <Link to={"/"}>
            <img src="/Logo-beta5.png" className="w-40 md:w-44 h-10 md:h-11 md:ml-10" alt="spollnet" />
          </Link>
          
          <div className="hidden md:flex md:items-center md:space-x-4 md:ml-auto md:mr-4">
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white hover:bg-gradient-to-r hover:from-[#e7148c] hover:to-[#6e1d5c] focus:ring-4 focus:outline-none focus:ring-[#E41FAE]/50 font-medium rounded-lg text-base px-5 py-2 text-center transition-all duration-300 ease-in-out"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/Sign-in"
              className="bg-transparent border-2 border-gradient-to-r border-[#ffffff] text-white hover:bg-gradient-to-r hover:from-[#e7148c] hover:to-[#6e1d5c] focus:ring-4 focus:outline-none focus:ring-[#E41FAE]/50 font-medium rounded-lg text-base px-5 py-2 text-center"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md"
          onClick={toggleNavbar}
        ></div>
      )}
      <div className={`fixed top-0 right-0 h-full w-4/5 sm:w-3/4 transform transition-transform z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-[#0e0e0e] ease-in-out duration-500 md:hidden rounded-l-3xl border-l-2 border-[#e7148c]`}>
        <div className="flex justify-end p-4">
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
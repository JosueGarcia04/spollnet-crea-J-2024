import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDoorOpen, faNewspaper, faChartSimple, faCalendarCheck, faUsers} from '@fortawesome/free-solid-svg-icons'

const NavDownCoordinator = () =>{
    const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const bottomDistance = documentHeight - (scrollPosition + windowHeight);

      setIsAtBottom(bottomDistance < 700); 
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };


  return(
    <>
    <nav className={`fixed bottom-0 left-0 right-0 border-2 border-[#e7148c] bg-black py-2 flex justify-around items-center md:hidden rounded-t-3xl transition-all duration-500 ${isAtBottom && isScrolled ? 'rounded-t-none' : ''}`} style={{position: '-webkit-sticky', position: 'sticky', zIndex: 40}}>
      <Link to={"/periodsOfVotesDashboard"} className="text-white hover:text-gray-400">
        <div className="flex items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <FontAwesomeIcon icon={faCalendarCheck} className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
      <Link to={"/studentsTable" }className="text-white hover:text-gray-400">
        <div className="flex items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <FontAwesomeIcon icon={faUsers} className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
      <Link onClick={handleLogout}className="text-white hover:text-gray-400">
        <div className="flex items-center">
          <div className="rounded-full bg-[#e7148c] w-12 h-12 flex justify-center items-center">
            <FontAwesomeIcon icon={faDoorOpen} className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
      <Link to={"/mainStatistic"} className="text-white hover:text-gray-400">
        <div className="flex items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <FontAwesomeIcon icon={faChartSimple} className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
      <Link to={"/newsDashboard" }className="text-white hover:text-gray-400">
        <div className="flex items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <FontAwesomeIcon icon={faNewspaper} className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
    </nav>
    </>
  );
}

export default NavDownCoordinator;
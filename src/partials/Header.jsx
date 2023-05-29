import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  //   const [top, setTop] = useState(true);

  //   // detect whether user has scrolled the page down by 10px
  //   useEffect(() => {
  //     const scrollHandler = () => {
  //       window.pageYOffset > 10 ? setTop(false) : setTop(true);
  //     };
  //     window.addEventListener('scroll', scrollHandler);
  //     return () => window.removeEventListener('scroll', scrollHandler);
  //   }, [top]);

  return (
    <header className="mt-2">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0 mr-4">
          {/* Logo */}
          <Link to="/" className="block" aria-label="Cruip">
            <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient
                  cx="21.152%"
                  cy="86.063%"
                  fx="21.152%"
                  fy="86.063%"
                  r="79.941%"
                  id="header-logo"
                >
                  <stop stopColor="#4FD1C5" offset="0%" />
                  <stop stopColor="#81E6D9" offset="25.871%" />
                  <stop stopColor="#338CF5" offset="100%" />
                </radialGradient>
              </defs>
              <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
            </svg>
          </Link>
        </div>
        <div className="flex justify-start items-center">
          <div className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">
            Sign in
          </div>

          <div className=" font-medium text-white hover:bg-[#2c2c2c] bg-black px-4 py-2 rounded flex items-center transition duration-150 ease-in-out cursor-pointer">
            <span>Sign up</span>
            <svg
              className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

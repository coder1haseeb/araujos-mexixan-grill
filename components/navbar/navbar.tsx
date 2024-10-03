'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../../assets/log0.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <div className="px-28 xl:px-14 lg:px-7 sm:!px-4 pb-8 pt-1">
      <div className="bg-white rounded-full flex items-center justify-between py-5 px-6 md:py-2">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo_image"
              className="h-[90px] lg:h-[80px] lg:w-[80px]"
              loading="lazy"
              width={90}
              height={90}
            />
          </Link>
        </div>
        <div className="md:hidden">
          <Link href="/" className="mx-3 lg:mx-2 text-base font-medium hover:text-reddish duration-300 hover:duration-300">
            Home
          </Link>
          <Link href="/menu" className="mx-3 lg:mx-2 text-base font-medium hover:text-reddish duration-300 hover:duration-300">
            Menu
          </Link>
          <Link href="/location" className="mx-3 lg:mx-2 text-base font-medium hover:text-reddish duration-300 hover:duration-300">
            Locations
          </Link>
          <Link href="/a-tacos-lover-story" className="mx-3 lg:mx-2 text-base font-medium hover:text-reddish duration-300 hover:duration-300">
            A TACO-lovers story
          </Link>
        </div>
        <div className="flex items-center justify-end md:hidden">
          <a
            target="_blank"
            href="https://order.online/business/araujos-mexican-grill-312560"
            className="bg-reddish text-white text-base font-medium px-4 py-2 rounded-full ml-6"
          >
            Order Now
          </a>
        </div>
        <div onClick={handleOpenMenu} id="hamburger" className={`${isOpen ? 'hidden' : 'md:block hidden'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
        <div onClick={handleCloseMenu} id="cross" className={`${isOpen ? '' : 'hidden'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div id="mobileNav" className="shadow-xl p-5 rounded-lg">
          <div className="flex flex-col">
            <Link href="/" className="mx-3 mt-2 lg:mx-2 text-base font-medium hover:text-reddish duration-300 hover:duration-300">
              Home
            </Link>
            <Link href="/menu" className="mx-3 mt-2 lg:mx-2 text-base font-medium hover:text-reddish duration-300 hover:duration-300">
              Menu
            </Link>
            <Link href="/location" className="mx-3 mt-2 lg:mx-2 text-base font-medium hover:text-reddish duration-300 hover:duration-300">
              Locations
            </Link>
            <Link href="/a-tacos-lover-story" className="mx-3 mt-2 lg:mx-2 text-base font-medium hover:text-reddish duration-300 hover:duration-300">
              A TACO-lovers story
            </Link>
          </div>
          <div className="flex mt-2 items-center justify-start">
            <a
              target="_blank"
              href="https://order.online/business/araujos-mexican-grill-312560"
              className="bg-reddish text-white text-base font-medium px-4 py-2 rounded-full"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

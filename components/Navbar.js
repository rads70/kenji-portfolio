import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";
import logo from "../public/images/Logo.png";

import NavLink from "./NavLink";
import Link from "next/link";
export default function Navbar() {
   const [toggleMenu, setToggleMenu] = useState(false);
   const handleClick = () => {
      setToggleMenu(!toggleMenu);
   };
   const handleLinkClick = () => {
      setToggleMenu(false);
   };

   const links = [
      {
         link: "works",
         label: "Works",
      },
      {
         link: "process",
         label: "Process",
      },
      {
         link: "about",
         label: "About",
      },
      {
         link: "contact",
         label: "Contact",
      },
   ];
   return (
      <div className='z-30 min-w-full absolute top-0 left-0 '>
         <div className='container mx-auto flex items-center justify-between  bg-transparent px-4 h-32'>
            <div className=''>
               <Link href='/'>
                  <a>
                     <Image src={logo} width={190} height={50} />
                  </a>
               </Link>
            </div>

            <nav className=' text-lg text-white tracking-wider font-semibold md:flex items-center '>
               <div className='hidden md:block'>
                  {links.map((link) => (
                     <NavLink
                        href={link.link}
                        label={link.label}
                        key={link.label}
                     />
                  ))}
               </div>
               <span className='text-2xl md:hidden' onClick={handleClick}>
                  <MdOutlineMenu />
               </span>
            </nav>
         </div>
         <div
            className={`fixed top-0 right-0 bg-black z-60 h-screen w-0 transition-all  overflow-hidden pt-12 shadow-sm shadow-slate-700 ${
               toggleMenu ? "w-44" : ""
            }`}
         >
            <div
               className='text-4xl text-white absolute top-10 right-4 ml-12'
               onClick={handleClick}
            >
               &times;
            </div>
            <nav className='flex flex-col  text-white mt-10 text-lg font-semibold pl-5'>
               {links.map((link) => (
                  <NavLink
                     href={link.link}
                     label={link.label}
                     classes='mb-2'
                     onClick={handleLinkClick}
                     key={link.label}
                  />
               ))}
            </nav>
         </div>
      </div>
   );
}

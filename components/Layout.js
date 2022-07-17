import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children }) => {
   return (
      <>
         <Meta />
         <div className='h-max relative'>
            <header>
               <Navbar />
            </header>

            <main className='min-h-screen '>{children}</main>
            <footer>
               <Footer />
            </footer>
         </div>
      </>
   );
};

export default Layout;

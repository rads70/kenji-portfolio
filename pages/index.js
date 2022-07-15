import React, { useState } from "react";

import Image from "next/image";

export default function Home() {
   const [loaded, setLoaded] = useState(false);

   return (
      <div className='bg-primary h-full'>
         <div className='relative '>
            <header className='relative flex items-center justify-center h-screen overflow-hidden'>
               <video
                  autoPlay
                  loop
                  muted
                  className={`absolute z-10 w-auto min-w-full width md:min-h-full max-w-none ${
                     loaded ? "opacity-100" : "opacity-0"
                  } transition opacity ease-in duration-700`}
                  onLoadedData={() => setLoaded(true)}
               >
                  <source src='https://www.dropbox.com/s/eovsh76gm6fiv4r/WBS%20stack%20-%20Tour%20de%20France%20%28stage%201%29.mp4?raw=1#t=31' />
                  Your browser does not support the video tag
               </video>
               <div className='animate-fadeIn'>
                  <Image
                     src='/images/Logo.png'
                     width={210}
                     height={60}
                     alt='Kenji Wilkie Choreography'
                  />
               </div>
            </header>
         </div>
      </div>
   );
}

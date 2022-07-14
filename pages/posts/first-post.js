import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function FirstPost() {
   return (
      <div className='relative bg-primary'>
         <header className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
            <video
               autoPlay
               loop
               muted
               className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
            >
               <source src='https://www.dropbox.com/s/eovsh76gm6fiv4r/WBS%20stack%20-%20Tour%20de%20France%20%28stage%201%29.mp4?raw=1' />
               Your browser does not support the video tag
            </video>
         </header>

         <Navbar />
      </div>
   );
}

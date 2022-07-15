import Image from "next/image";
import { BsInstagram } from "react-icons/bs";

export default function Contact() {
   return (
      <div className='bg-secondary h-full'>
         <Image src='/images/contact.jpg' layout='fill' objectFit='cover' />
         <div className='absolute top-1/3 right-1/3 text-right'>
            <h1 className='text-white text-3xl text font-normal mb-10 '>
               KENJI WILKIE
            </h1>
            <div className='text-white text-lg font-semibold'>
               <p>Postboks 785 Sentrum</p>
               <p className='mb-3'>N-0106 OSLO</p>
               <p className='mb-6'>+47 454 23 322</p>
               <p className='mb-2'>
                  <a href='mailto:kenjie.wilkie@gmail.com'>
                     kenji.wilkie@gmail.com
                  </a>
               </p>
               <p className='flex justify-end '>
                  <span className=' mt-1 mr-2 text-xl'>
                     <BsInstagram />
                  </span>
                  <a
                     href='https://www.instagram.com/kenji_wilkie '
                     target='_blank'
                  >
                     @kenji_wilkie
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
}

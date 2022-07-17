import Image from "next/image";
import Meta from "../components/Meta";
import { BsInstagram } from "react-icons/bs";

export default function Contact() {
   return (
      <>
         <Meta title='Contact Kenji' />
         <div className='bg-secondary relative h-screen w-full'>
            <Image
               src='/images/contact.jpg'
               layout='fill'
               objectFit='cover'
               alt=''
               objectPosition='35%'
               priority={true}
            />
            <div className='absolute top-[42%] lg:top-1/3 right-[14%] lg:right-1/3 text-right'>
               <h1 className='text-white text-2xl lg:text-3xl text font-normal mb-10 '>
                  KENJI WILKIE
               </h1>
               <div className='text-white text-normal lg:text-lg font-semibold'>
                  <p>Postboks 785 Sentrum</p>
                  <p className='mb-3'>N-0106 OSLO</p>
                  <p className='mb-6'>+47 454 23 322</p>
                  <p className='mb-2'>
                     <a href='mailto:kenjie.wilkie@gmail.com'>
                        kenji.wilkie@gmail.com
                     </a>
                  </p>
                  <p className='flex justify-end '>
                     <span className=' mt-1 mr-2 text lg lg:text-xl'>
                        <BsInstagram />
                     </span>
                     <a
                        href='https://www.instagram.com/kenji_wilkie '
                        target='_blank'
                        rel='noreferrer'
                     >
                        @kenji_wilkie
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

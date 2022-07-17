import Link from "next/link";
import Image from "next/image";

import urlFor from "../../lib/imageBuilder";
import { getClient } from "../../lib/sanity.server";
import Meta from "../../components/Meta";

export async function getStaticProps() {
   const process = await getClient().fetch(
      `*[_type=="process"] | order(year desc)`
   );

   return {
      props: { process },
      revalidate: 10,
   };
}

export default function Process({ process }) {
   return (
      <div className='bg-secondary min-h-screen'>
         <Meta title='Process by Kenji Wilkie' />
         <div className='pt-36 mx-auto p-4 '>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center'>
               {process?.map((process) => (
                  <div className='max-w-xl ' key={process._id}>
                     <Link href={`/process/${process.slug.current}`}>
                        <a className='relative '>
                           {process && (
                              <div className='relative'>
                                 <Image
                                    src={urlFor(process.mainImage)
                                       .width(600)
                                       .height(600)
                                       .url()}
                                    className='object-cover  '
                                    alt=''
                                    height={600}
                                    width={600}
                                    objectFit='cover'
                                 />
                                 <div className='z-10 absolute top-0 h-full w-full text-white text-xs md:text-sm lg:text-xl text-center opacity-0 hover:opacity-90 transition opacity ease-in-out 0.5s'>
                                    <div className='flex justify-center items-end pb-4 w-full h-full'>
                                       {process.title}
                                    </div>
                                 </div>
                              </div>
                           )}
                        </a>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

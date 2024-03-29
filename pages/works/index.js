import Link from "next/link";
import Image from "next/image";

import urlFor from "../../lib/imageBuilder";
import Meta from "../../components/Meta";
import { getClient } from "../../lib/sanity.server";

export async function getStaticProps() {
   const works = await getClient().fetch(
      `*[_type=="works"] | order(year desc)`
   );

   return {
      props: { works },
      revalidate: 10,
   };
}

export default function Works({ works }) {
   return (
      <>
         <Meta title='Kenji Wilkie Choreographic works' />
         <div className='bg-primary min-h-screen'>
            <div className='pt-36 mx-auto p-4 '>
               <div className='grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center'>
                  {works?.map((work) => (
                     <div className='max-w-xl ' key={work._id}>
                        <Link href={`/works/${work.slug.current}`}>
                           <a className='  '>
                              {work && (
                                 <Image
                                    src={urlFor(work.mainImage)
                                       .width(600)
                                       .height(600)
                                       .url()}
                                    className='object-cover hover:scale-105 transition ease-in-out duration-500'
                                    alt={work.alt || ""}
                                    height={600}
                                    width={600}
                                    objectFit='cover'
                                 />
                              )}
                           </a>
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

import Link from "next/link";
import urlFor from "../../lib/imageBuilder";
import { getClient } from "../../lib/sanity.server";
import Head from "next/head";

export async function getStaticProps() {
   const process = await getClient().fetch(`*[_type=="process"]`);

   return {
      props: { process },
   };
}

export default function Process({ process }) {
   return (
      <div className='bg-secondary min-h-screen'>
         <Head>
            <title>Process of choreographic work</title>
         </Head>
         <div className='pt-36 mx-auto p-4 '>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center'>
               {process?.map((process) => (
                  <div className='max-w-xl ' key={process._id}>
                     <Link href={`/process/${process.slug.current}`}>
                        <a className='  '>
                           {process && (
                              <img
                                 src={urlFor(process.mainImage)
                                    .width(600)
                                    .height(600)
                                    .url()}
                                 className='object-cover hover:scale-105 transition ease-in-out duration-500'
                                 alt=''
                              />
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

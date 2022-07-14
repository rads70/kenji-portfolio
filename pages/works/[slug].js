import React, { useState } from "react";
import { groq } from "next-sanity";

import { usePreviewSubscription } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import { PortableText } from "@portabletext/react";
import urlFor from "../../lib/imageBuilder";
import Navbar from "../../components/Navbar";

export default function Page({ data, preview }) {
   const [loaded, setLoaded] = useState(false);
   const { data: previewData } = usePreviewSubscription(data?.query, {
      params: data?.queryParams ?? {},
      initialData: data?.page,
      enabled: preview,
   });

   const page = filterDataToSingleItem(previewData, preview);

   const components = {
      types: {
         code: (props) => (
            <pre data-language={props.node.language}>
               <code>{props.node.code}</code>
            </pre>
         ),
      },
      block: {
         h1: ({ children }) => <h1 className='text-3xl'>{children}</h1>,
         h2: ({ children }) => <h1 className='text-2xl'>{children}</h1>,

         h6: ({ children }) => <h6 className='text-xs'>{children}</h6>,
         normal: ({ children }) => (
            <p className='text-base leading-6'>{children}</p>
         ),
         blockquote: ({ children }) => (
            <blockquote className=' text-xl leading-7'>{children}</blockquote>
         ),
      },
   };

   return (
      <div className='relative bg-primary min-h-screen'>
         <main className={`pt-32  mx-auto text-slate-300 container p-4`}>
            {page?.videoLink && (
               <div className='relative '>
                  <div className='relative flex justify-center items-center h-[350px] md:h-[650px] overflow-hidden'>
                     <video
                        autoPlay
                        loop
                        muted
                        className={`absolute z-10 w-auto min-w-full width md:min-h-full max-w-none ${
                           loaded ? "opacity-100" : "opacity-0"
                        } transition opacity ease-in duration-700`}
                        onLoadedData={() => setLoaded(true)}
                     >
                        <source src={page.videoLink} />
                        Your browser does not support the video tag
                     </video>
                  </div>
               </div>
            )}
            <div className='flex flex-col-reverse md:flex-row mt-12'>
               <div className='md:w-2/3'>Picture</div>
               <div className='md:w-1/2'>
                  {page?.title && (
                     <h1 className='text-3xl mb-10'>{page.title}</h1>
                  )}
                  {page?.tagline && (
                     <p className='text-xl mb-10'>{page.tagline}</p>
                  )}
                  {page?.text && (
                     <div className='md:w-3/4'>
                        <PortableText
                           value={page.text}
                           components={components}
                        />
                     </div>
                  )}
               </div>
            </div>

            {page?.mainImage && (
               <img src={urlFor(page.mainImage).width(200).url()} />
            )}
            {page?.carouselImages && (
               <div>
                  {page.carouselImages.map((image) => (
                     <img src={urlFor(image).width(200).url()} />
                  ))}
               </div>
            )}
         </main>
      </div>
   );
}

function filterDataToSingleItem(data, preview) {
   if (!Array.isArray(data)) return data;

   if (data.length === 1) return data[0];

   if (preview)
      return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];

   return data[0];
}

export async function getStaticPaths() {
   const allSlugsQuery = groq`*[defined(slug.current)][].slug.current`;
   const pages = await getClient().fetch(allSlugsQuery);

   return {
      paths: pages.map((slug) => `/works/${slug}`),
      fallback: true,
   };
}

export async function getStaticProps({ params, preview = false }) {
   const query = groq`*[_type == "work" && slug.current == $slug]`;
   const queryParams = { slug: params.slug };
   const data = await getClient().fetch(query, queryParams);

   if (!data) return { notFound: true };

   const page = filterDataToSingleItem(data, preview);

   return {
      props: {
         preview,
         data: { page, query, queryParams },
      },
   };
}

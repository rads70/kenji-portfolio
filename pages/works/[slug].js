import React, { useState } from "react";
import { groq } from "next-sanity";
import Image from "next/image";

import Meta from "../../components/Meta";
import { usePreviewSubscription } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import { PortableText } from "@portabletext/react";
import { Carousel } from "react-responsive-carousel";
import urlFor from "../../lib/imageBuilder";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Page({ data, preview }) {
   const [loaded, setLoaded] = useState(false);
   const { data: previewData } = usePreviewSubscription(data?.query, {
      params: data?.queryParams ?? {},
      initialData: data?.page,
      enabled: preview,
   });

   const page = filterDataToSingleItem(previewData, preview);

   //Styling of block content types
   const components = {
      types: {
         code: (props) => (
            <pre data-language={props.node.language}>
               <code>{props.node.code}</code>
            </pre>
         ),
      },
      block: {
         h1: ({ children }) => (
            <h1 className='text-2xl lg:text-3xl'>{children}</h1>
         ),
         h2: ({ children }) => (
            <h1 className='text-xl lg:text-2xl'>{children}</h1>
         ),

         h6: ({ children }) => (
            <h6 className='text-xs lg:text-sm mb-4 opacity-1'>{children}</h6>
         ),
         normal: ({ children }) => (
            <p className='  lg:text-lg leading-6 mb-8'>{children}</p>
         ),
         blockquote: ({ children }) => (
            <blockquote className='text-lg lg:text-xl leading-7 mb-6'>
               {children}
            </blockquote>
         ),
      },
   };

   return (
      <div className='relative bg-black min-h-full'>
         <Meta title={page?.title} />
         <main className={`pt-32  mx-auto text-white container p-4`}>
            {page?.videoLink ? (
               <div className='relative mb-12 md:mb-24'>
                  <div className='relative flex justify-center items-center h-[350px] md:h-[700px] overflow-hidden'>
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
                     <div className='animate-fadeIn'>
                        <h1 className='text-white text-3xl'>{page?.title}</h1>
                     </div>
                  </div>
               </div>
            ) : (
               <div className='md:mt-24'></div>
            )}
            <div
               className={`flex ${
                  page?.videoLink ? "flex-col-reverse" : "flex-col"
               } md:flex-row mt-4 gap-10`}
            >
               <div className='md:w-3/4 h-max '>
                  <Carousel
                     autoPlay={true}
                     infiniteLoop={true}
                     interval={3000}
                     showThumbs={false}
                     showStatus={false}
                  >
                     {page?.carouselImages?.map((image) => (
                        <div
                           className='h-[300px] md:h-[600px] flex items-center'
                           key={image._key}
                        >
                           <Image
                              src={urlFor(image).width(1000).url()}
                              alt={image.alt || ""}
                              objectFit='cover'
                              layout='fill'
                           />
                        </div>
                     ))}
                  </Carousel>
               </div>
               <div className='md:w-1/2 opacity-90 text-center p-4'>
                  {page?.title && (
                     <h1 className='text-2xl lg:text-3xl mb-10'>
                        {page.title}
                     </h1>
                  )}
                  {page?.tagline && (
                     <p className='text-lg lg:text-xl mb-10'>{page.tagline}</p>
                  )}
                  {page?.text && (
                     <div className=' '>
                        <PortableText
                           value={page.text}
                           components={components}
                        />
                     </div>
                  )}
               </div>
            </div>

            {page?.otherImages && (
               <div className='grid gap-4 grid-cols-2 md:grid-cols-3 mx-auto justify-items-center my-24'>
                  {page?.otherImages?.images.map((image, index) => (
                     <div className='w-96' key={index}>
                        <Image
                           src={urlFor(image).height(400).url()}
                           alt={image.alt || ""}
                           key={index}
                           height={400}
                           width={400}
                           objectFit='cover'
                        />
                     </div>
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

export async function getServerSideProps({ params, preview = false }) {
   const query = groq`*[_type == "works" && slug.current == $slug]`;
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

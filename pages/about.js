import Image from "next/image";
import { getClient } from "../lib/sanity.server";

export default function About({ works }) {
   return (
      <div className='bg-secondary min-h-screen min-w-full pt-32 '>
         <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row gap-4  bg-secondary pb-6 mb-12 lg:mb-20'>
               <div className='w-full lg:w-1/2 flex justify-center p-4'>
                  <Image
                     src='/images/about.jpg'
                     width={500}
                     height={800}
                     objectFit='cover'
                     alt='Kenjie wilkie'
                  />
               </div>

               <div className=' p-4 w-full lg:w-1/2 text-secondary '>
                  <blockquote className=' mb-12 relative p-4 text-xl italic border-l-4 bg-neutral-100  border-neutral-500 quote bg-secondary'>
                     <p className='mb-4'>
                        &ldquo;Kenji Wilkie has his feet firmly planted in
                        several corners of the world at the same time. This is
                        well shown in his choreographies when we as spectators
                        are drawn into a world of clear aesthetic and humour,
                        where the foreign becomes recognisable, and the known
                        becomes strange. His interest in the world is nuanced,
                        making his art fearless and cross-genre.”
                     </p>
                     <cite className='text-sm'>
                        - Esther Maria Bjørneboe, Artist
                     </cite>
                  </blockquote>
                  <blockquote className=' mb-12 relative p-4 text-xl italic border-l-4 bg-neutral-100  border-neutral-500 quote bg-secondary'>
                     <p className='mb-4'>
                        “Kenji’s work shows a distinctive and authentic
                        approach, that uses thought provoking, conceptual ideas
                        that have life within the dance.”
                     </p>
                     <cite className='text-sm'>
                        -Kate Flatt OBE, Choreographer
                     </cite>
                  </blockquote>
                  <div className='text-lg'>
                     <p className='mb-4'>
                        Born in Frankfurt/Main to Australian Japanese parents
                        and growing up in Sydney, Wilkie began his dance
                        training in 2010 under the tuition of Hilary Kaplan and
                        Archibald McKenzie before attending The Royal Ballet
                        Upper School. There in his second year, he created his
                        first piece ‘Ataraxia’ for the 2014 Ursula Moreton
                        Choreographic Award, winning first prize.
                     </p>
                     <p>
                        After graduating in 2015, he joined Norwegian National
                        Ballet. During his time working there he experienced a
                        wide variety of repertoire, forming a strong
                        foundational understanding of the ballet and modern
                        classics, as well as an exposure to and awareness of the
                        broad and growing spectrum that is contemporary dance.
                     </p>
                  </div>
               </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row gap-12 justify-center lg:justify-start mb-12 lg:mb-20 h-full w-full bg-secondary pb-6 text-secondary text-lg p-4'>
               <div className='lg:w-1/2 px-4'>
                  <p className='mb-4'>
                     To date he has worked with choreographers such as Jiri
                     Kylian, Mats Ek, William Forsythe, Ohad Naharin, Wayne
                     McGregor, Jo Strømgren, Ina Christel Johannessen, Alexander
                     Ekman, Alan Lucien Øyen, Andreas Heise, Garrett Smith,
                     Marit Moum Aune, Kaloyan Boyadjiev, Yoshifumi Inao, Cina
                     Espejord, Melissa Hough, Juliano Nunes and Patrick King,
                     providing him with a diverse range of artistic styles and
                     creative processes to draw inspiration from.
                  </p>
                  <p className='mb-4'>
                     When working independently the relationship between music
                     and dance forms a strong foundation to his choreographic
                     approach. Through extensive listening and interpretation of
                     the music, he connects and shapes his ideas. Aligning the
                     dance rhythmically and melodically, whilst also bringing it
                     in harmony with the concepts and character of the music.
                  </p>
                  <p className='mb-4'>
                     In collaborations he has worked with various artists from
                     the fields of film, visual art, chamber music, jazz,
                     theatre and architecture, giving him an open and creative
                     approach to the synthesis and achievement of a project’s
                     goals. Working with artists outside of the dance field has
                     helped expand his perspective in terms of composition and
                     style when it comes to creating for different platforms and
                     settings.
                  </p>
               </div>
               <div className='lg:w-1/2'>
                  <div className='w-full h-full  flex justify-center '>
                     <Image
                        src='/images/contact.jpg'
                        width={800}
                        height={600}
                        objectFit='cover'
                        alt='Kenji Wilkie'
                     />
                  </div>
               </div>
            </div>
            <div>
               <h2 className='text-center text-2xl text-secondary'>Works</h2>
               <div className='flex justify-center  h-full w-full bg-secondary pb-24 text-secondary text-lg p-4'>
                  <div className='w-full columns-1 md:columns-2 lg:columns-3  text-center'>
                     {works?.map((work) => (
                        <p
                           className='w-full text-lg'
                           key={work.title}
                        >{`${work.title} - ${work.year}`}</p>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export async function getStaticProps() {
   const works = await getClient().fetch(`*[_type=="works"]{title,year}`);
   console.log(works);
   return {
      props: { works },
   };
}

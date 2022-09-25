import Head from "next/head";

function Meta({ title, description, keywords }) {
   return (
      <Head>
         <meta charSet='UTF-8' />
         <meta http-Equiv='X-UA-Compatible' content='IE=edge' />
         <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
         />
         <meta name='keywords' content={keywords} />
         <meta name='description' content={description} />
         <link rel='preconnect' href='https://fonts.googleapis.com' />
         <link
            href='https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Space+Grotesk:wght@300;400&display=swap'
            rel='stylesheet'
         />
         <title>{title}</title>
      </Head>
   );
}

export default Meta;

Meta.defaultProps = {
   title: "Kenji Wilkie Choreography",
   description: "Presenting Kenji Wilkie's choreographic works",
   keywords: "choreography, dance, music, movement, creative, ballet",
};

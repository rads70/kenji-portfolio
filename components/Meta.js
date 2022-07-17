import Head from "next/head";

function Meta({ title, description, keywords }) {
   return (
      <Head>
         <meta charset='UTF-8' />
         <meta http-equiv='X-UA-Compatible' content='IE=edge' />
         <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
         />
         <meta name='keywords' content={keywords} />
         <meta name='description' content={description} />
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

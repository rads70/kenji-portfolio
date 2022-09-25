export const components = {
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
      h2: ({ children }) => <h1 className='text-xl lg:text-2xl'>{children}</h1>,

      h6: ({ children }) => (
         <h6 className='text-xs lg:text-sm text-black font-space-grotesk  mb-4 opacity-1'>
            {children}
         </h6>
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

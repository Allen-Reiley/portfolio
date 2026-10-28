Use these for the installation process of kokonutui
- pnpm dlx shadcn@latest init
- pnpm dlx shadcn@latest add https://kokonutui.com/r/utils.json

Add the morphic-navbar component from Kokonut UI to this project with npx shadcn@latest add https://kokonutui.com/r/morphic-navbar.json, then show me how to use it.

You must install tailwindcss. As most of our components use motion install it too.

npm install motion clsx tailwind-merge

npx shadcn@latest add https://ui-layouts.com/r/liquid-glass-sidebar-menu

import React from 'react';

function CreativeVideoMasking() {
  return (
    <>
      <section
        className='relative'
        style={{
          aspectRatio: '1213/667',
          backgroundColor: 'tomato',
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
          WebkitMaskImage:
            "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      >
        <video autoPlay muted loop className='w-full max-h-96 object-cover aspect-square'>
          <source
            src='https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4'
            type='video/mp4'
          />
        </video>
      </section>
    </>
  );
}

export default CreativeVideoMasking;


import Earth from '@/components/ui/globe';
import React from 'react';

function CardGlobeWhite() {
  return (
    <>
      <div className='min-h-screen overflow-hidden bg-background text-white'>
        <article className='max-w-[500px] overflow-hidden mx-auto mt-6 p-5 text-center   border rounded-lg relative h-[500px]'>
          <div className='absolute top-0 left-0 z-[1] h-full w-full  bg-[radial-gradient(#83838352_1px,#ececec_1px)] bg-[size:20px_20px]'></div>
          <div className='relative z-10 pt-4 h-full'>
            <h1 className='sm:text-7xl text-5xl font-semibold bg-gradient-to-b from-[#202020] to-[#9c9c9c] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
              DESIGN A MASTERPIECE
            </h1>
            <Earth
              mapBrightness={6}
              dark={0}
              baseColor={[1, 1, 1]}
              glowColor={[1, 1, 1]}
              className='sm:max-w-[800px] max-w-[1000px] absolute sm:bottom-auto -bottom-20 translate-y-4 sm:-right-20 -right-0 sm:h-[450px] h-[550px]'
            />
          </div>
        </article>
      </div>
    </>
  );
}

export default CardGlobeWhite;

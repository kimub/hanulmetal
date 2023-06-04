'use client';

import Image from 'next/image';
import logo from '../../public/logo.svg';
import Nav from './Nav';
// import { useHeaderInteractive } from '../hooks/useHeaderInteractive';

export default function Header() {
  // const headerRef = useHeaderInteractive();

  return (
    <header
      className='fixed top-0 w-full bg-white transition-all duration-500'
      // ref={headerRef}
    >
      <div className='safe-area-pt-3 md:safe-area-pt-6 mx-auto flex max-w-screen-xl justify-center border-secondary px-4 pb-3 md:justify-between md:pb-6'>
        <Image
          src={logo}
          className='w-28 md:w-40 lg:w-auto'
          alt='한울메탈릭스'
          priority
        />
        <Nav />
      </div>
    </header>
  );
}

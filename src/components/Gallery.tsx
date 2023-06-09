import Image from 'next/image';
import hanulmetal4 from '../../public/hanulmetal4.png';
import hanulmetal5 from '../../public/hanulmetal5.png';
import hanulmetal6 from '../../public/hanulmetal6.png';
import hanulmetal7 from '../../public/hanulmetal7.png';
import hanulmetal8 from '../../public/hanulmetal8.png';
import hanulmetal9 from '../../public/hanulmetal9.png';
import { FiArrowRightCircle } from 'react-icons/fi';
import Link from 'next/link';

export default function Gallery() {
  return (
    <section className='wrapper' id='gallery'>
      <h2 className='title'>갤러리(작업 내용)</h2>
      <ul className=' mt-10 flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center'>
        <li className='md:w-1/4'>
          <Image src={hanulmetal4} alt='한울메탈' className='h-full w-full' />
        </li>
        <li className='md:w-1/4'>
          <Image src={hanulmetal5} alt='한울메탈' className='h-full w-full' />
        </li>
        <li className='md:w-1/4'>
          <Image src={hanulmetal6} alt='한울메탈' className='h-full w-full' />
        </li>
        <li className='md:w-1/4'>
          <Image src={hanulmetal7} alt='한울메탈' className='h-full w-full' />
        </li>
        <li className='md:w-1/4'>
          <Image src={hanulmetal8} alt='한울메탈' className='h-full w-full' />
        </li>
        <li className='relative md:w-1/4'>
          <Image src={hanulmetal9} alt='한울메탈' className='h-full w-full' />
          <div className='absolute -bottom-9 right-0 hidden items-center justify-end gap-3 text-primary md:flex'>
            <FiArrowRightCircle size={32} className='text-primary' />
            <Link href='/gallery' className='text-xl font-semibold'>
              더보기
            </Link>
          </div>
        </li>
      </ul>
      <p className='mt-2 flex items-center justify-end gap-3 text-primary md:hidden'>
        <FiArrowRightCircle size={32} className='text-primary' />
        <Link href='/gallery' className='text-xl font-semibold'>
          더보기
        </Link>
      </p>
    </section>
  );
}

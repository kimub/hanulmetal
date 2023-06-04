import Image from 'next/image';
import hanulmetal4_m from '../../public/hanulmetal4_m.png';
import hanulmetal5_m from '../../public/hanulmetal5_m.png';
import hanulmetal6_m from '../../public/hanulmetal6_m.png';
import hanulmetal7_m from '../../public/hanulmetal7_m.png';
import hanulmetal8_m from '../../public/hanulmetal8_m.png';
import hanulmetal9_m from '../../public/hanulmetal9_m.png';

export default function Gallery() {
  return (
    <section className='wrapper' id='gallery'>
      <h2 className='title'>갤러리(작업 내용)</h2>
      <ul className='mt-10 flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center'>
        <li className='md:w-1/4'>
          <Image src={hanulmetal4_m} alt='한울메탈' className='h-full w-full' />
        </li>
        <li className='md:w-1/4'>
          <Image src={hanulmetal5_m} alt='한울메탈' className='h-full w-full' />
        </li>
        <li className='md:w-1/4'>
          <Image src={hanulmetal6_m} alt='한울메탈' className='h-full w-full' />
        </li>
        <li className='md:w-1/4'>
          <Image src={hanulmetal7_m} alt='한울메탈' className='h-full w-full' />
        </li>
        <li className='md:w-1/4'>
          <Image src={hanulmetal8_m} alt='한울메탈' className='h-full w-full' />
        </li>
        <li className='md:w-1/4'>
          <Image src={hanulmetal9_m} alt='한울메탈' className='h-full w-full' />
        </li>
      </ul>
    </section>
  );
}

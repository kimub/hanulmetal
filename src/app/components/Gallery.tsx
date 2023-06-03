import Image from 'next/image';
import hanulmetal4 from '../../../public/hanulmetal4.png';
import hanulmetal5 from '../../../public/hanulmetal5.png';
import hanulmetal6 from '../../../public/hanulmetal6.png';
import hanulmetal7 from '../../../public/hanulmetal7.png';

export default function Gallery() {
  return (
    <section className='wrapper'>
      <h2 className='title'>갤러리(작업 내용)</h2>
      <ul className='mt-8 flex flex-col gap-8'>
        <li>
          <Image src={hanulmetal4} alt='한울메탈' className='w-full' />
        </li>
        <li>
          <Image src={hanulmetal5} alt='한울메탈' className='w-full' />
        </li>
        <li>
          <Image src={hanulmetal6} alt='한울메탈' className='w-full' />
        </li>
        <li>
          <Image src={hanulmetal7} alt='한울메탈' className='w-full' />
        </li>
      </ul>
    </section>
  );
}

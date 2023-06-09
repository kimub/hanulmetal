import Image, { StaticImageData } from 'next/image';

type Props = {
  src: StaticImageData;
  title: string;
  info: string[];
};

export default function InquiryList({ src, title, info }: Props) {
  return (
    <li className='flex gap-8 rounded-2xl bg-white p-6 max-[360px]:flex-col lg:w-1/3'>
      <div className='rounded-full bg-secondary p-6 max-[360px]:mx-auto'>
        <Image src={src} alt='title' width={40} height={40} />
      </div>
      <div className='flex flex-col justify-center text-left max-[360px]:text-center'>
        <h3 className='text-lg font-bold lg:text-xl'>{title}</h3>
        <div className='mt-1 text-sm font-semibold lg:text-base'>
          {info.map((info) => (
            <p key={info}>{info}</p>
          ))}
        </div>
      </div>
    </li>
  );
}

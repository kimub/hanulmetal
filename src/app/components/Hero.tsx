import Image from 'next/image';
import hanulmetal1 from '../../../public/hanulmetal1.png';
import hanulmetal2 from '../../../public/hanulmetal2.png';
import hanulmetal3 from '../../../public/hanulmetal3.png';

export default function Hero() {
  return (
    <section className='wrapper flex flex-col items-center gap-6 p-8'>
      <div className='flex w-full flex-col gap-6'>
        <Image src={hanulmetal1} alt='한울메탈' className='w-full' />
        <div className='flex gap-6'>
          <Image src={hanulmetal2} alt='한울메탈' className='w-full' />
          <Image src={hanulmetal3} alt='한울메탈' className='w-full' />
        </div>
      </div>
      <div className='flex flex-col items-center gap-4 break-keep text-center font-semibold '>
        <h2 className='text-center text-2xl font-bold leading-10'>
          폐판넬 / 해양 폐기물 / 스티로폼
          <br />
          <span className='text-primary'>정식 허가 업체</span>
        </h2>
        <p>
          모든 폐판넬(스티로폼 , 그라스울, 우레탄, 난연)
          <br />
          철거, 처리 및 해양 폐기물 (부표, 스티로폼, 어망)
          <br />
          전문 처리 정식 허가 업체
          <span className='text-primary'>한울메탈릭스</span>입니다.
        </p>
        <p>
          저희 <span className='text-primary'>한울메탈릭스</span>는&nbsp;
          <span className='text-primary'>어떠한 조건</span>의&nbsp;
          <span className='text-primary'>현장</span>과&nbsp;
          <span className='text-primary'>폐기물</span>도&nbsp;
          <span className='text-primary'>합리적인 가격</span>과&nbsp;
          <span className='text-primary'>최고의 작업 노하우</span>로 고객님들을
          만족시켜 드리는 환경 기업이 되겠습니다.
        </p>
        <p className='text-lg font-bold'>010-9326-5656 / 010-4141-0249</p>
        <a
          href='tel:010-9326-5656'
          className='mt-4 block w-32 rounded-lg bg-primary px-6 py-4 text-center text-lg tracking-wider text-white'
        >
          문의하기
        </a>
      </div>
    </section>
  );
}

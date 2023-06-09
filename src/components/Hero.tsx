import Image from 'next/image';
import hanulmetal1 from '../../public/hanulmetal1.png';
import hanulmetal2 from '../../public/hanulmetal2.png';
import hanulmetal3 from '../../public/hanulmetal3.png';

export default function Hero() {
  return (
    <section
      className='wrapper safe-area-pt-14 md:safe-area-pt-24 flex flex-col gap-6 md:flex-row md:justify-start md:gap-12 lg:gap-20'
      id='company'
    >
      <div className='flex w-full flex-col gap-4 md:w-2/4 lg:gap-6'>
        <Image src={hanulmetal1} alt='한울메탈' className='w-full' priority />
        <Image
          src={hanulmetal2}
          alt='한울메탈'
          className='w-full lg:hidden'
          priority
        />
        <Image
          src={hanulmetal3}
          alt='한울메탈'
          className='w-full lg:hidden'
          priority
        />
        <div className='hidden lg:flex lg:gap-6'>
          <Image
            src={hanulmetal2}
            alt='한울메탈'
            className='lg:hero-img-w w-full'
            priority
          />
          <Image
            src={hanulmetal3}
            alt='한울메탈'
            className='lg:hero-img-w w-full'
            priority
          />
        </div>
      </div>
      <div className='mt-4 flex flex-col items-center gap-6 break-keep text-center font-semibold md:mt-0 md:w-2/4 md:items-start md:justify-center md:text-left'>
        <h2 className='text-center text-2xl font-bold leading-10 md:text-left lg:text-4xl lg:leading-[3rem]'>
          폐판넬 / 해양 폐기물 / 스티로폼
          <br />
          <span className='text-primary'>정식 허가 업체</span>
        </h2>
        <p className='text-base leading-6 lg:text-xl lg:leading-8'>
          모든 폐판넬(스티로폼 , 그라스울, 우레탄, 난연)
          <br />
          철거, 처리 및 해양 폐기물(부표, 스티로폼, 어망)
          <br />
          전문 처리 정식 허가 업체&nbsp;
          <span className='text-primary'>한울메탈릭스</span>입니다.
        </p>
        <p className='text-base leading-6 lg:text-xl lg:leading-8'>
          저희 <span className='text-primary'>한울메탈릭스</span>는&nbsp;
          <span className='text-primary'>어떠한 조건</span>의&nbsp;
          <span className='text-primary'>현장</span>과&nbsp;
          <span className='text-primary'>폐기물</span>도&nbsp;
          <br />
          <span className='text-primary'>합리적인 가격</span>과&nbsp;
          <span className='text-primary'>최고의 작업 노하우</span>로 고객님들을
          <br />
          만족시켜 드리는 환경 기업이 되겠습니다.
        </p>
        <p className='text-lg font-bold lg:text-2xl'>
          010-9326-5656 / 010-4141-0249
        </p>
        <div className='flex gap-4'>
          <a
            href='https://blog.naver.com/yeon460'
            target='_blank'
            className='btn'
          >
            블로그
          </a>
          <a href='tel:010-9326-5656' className='btn'>
            문의하기
          </a>
        </div>
      </div>
    </section>
  );
}

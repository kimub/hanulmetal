import Bar from '@/components/Bar';
import Pictures from '@/components/Pictures';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '한울메탈릭스 상세 갤러리',
  description: '한울메탈릭스 상세 갤러리입니다.',
};

export default function Gallery() {
  return (
    <section className='pt-14 md:pt-24'>
      <Bar text='상세 갤러리(작업 내용)' isHome={false} />
      <div className='wrapper safe-area-pt-14 md:safe-area-pt-24 flex flex-col md:justify-start'>
        <Pictures />
      </div>
    </section>
  );
}

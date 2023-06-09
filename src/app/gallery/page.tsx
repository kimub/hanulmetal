import Bar from '@/components/Bar';
import Pictures from '@/components/Pictures';

export default function Gallery() {
  return (
    <section className='wrapper safe-area-pt-14 md:safe-area-pt-24 flex flex-col md:justify-start'>
      <Bar text='상세 갤러리(작업 내용)' isHome={false} />
      <Pictures />
    </section>
  );
}

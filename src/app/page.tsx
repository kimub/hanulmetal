import Bar from '../components/Bar';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Inquiry from '../components/Inquiry';
import Work from '../components/Work';

export default function Home() {
  return (
    <>
      <Hero />
      <Bar
        text='폐 판넬 처리 및 폐기물 중간 처리업 정식 허가 업체'
        isHome={true}
      />
      <Work />
      <Gallery />
      <Inquiry />
    </>
  );
}

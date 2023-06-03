import Bar from './components/Bar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Inquiry from './components/Inquiry';
import Work from './components/Work';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Bar />
      <Work />
      <Gallery />
      <Inquiry />
      <Footer />
    </>
  );
}

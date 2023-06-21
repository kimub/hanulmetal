import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// const jsonLd = {
//   '@context': 'http://schema.org',
//   '@type': 'Person',
//   name: '한울메탈릭스',
//   url: 'https://www.hanulmetal.co.kr',
//   sameAs: ['https://blog.naver.com/yeon460'],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='scroll-smooth' lang='ko'>
      <head>
        <title>한울메탈릭스</title>
        <link
          rel='icon'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685942890/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_32x32_vmezv0.ico'
        />
        <meta name='author' content='kimub' />
        <meta
          name='keywords'
          content='한울메탈, 한울메탈릭스, 폐판넬, 폐기물, 해양폐기물, 철거, 유품정리, 경남폐기물, 부산폐기물, 울산폐기물, 경남폐판넬, 부산폐판넬, 울산폐판넬, 쓰레기집'
        />
        <meta
          name='description'
          content='모든 폐판넬, 폐기물 철거 및 처리전문 정식허가업체 한울메탈입니다.'
        />
        <meta property='og:site_name' content='한울메탈릭스' />
        <meta property='og:locale' content='ko' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:title' content='한울메탈릭스' />
        <meta property='og:url' content='https://www.hanulmetal.co.kr' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685861994/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/opengarph_image_wfawvq.png'
        />
        <meta
          property='og:description'
          content='폐판넬 / 해양 폐기물 / 스티로폼 정식 허가 업체 한울메탈릭스'
        />

        <meta
          name='twitter:card'
          content='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685861994/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/opengarph_image_wfawvq.png'
        />
        <meta name='twitter:title' content='한울메탈릭스' />
        <meta
          name='twitter:description'
          content='폐판넬 / 해양 폐기물 / 스티로폼 정식 허가 업체 한울메탈릭스'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685861994/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/opengarph_image_wfawvq.png'
        />

        <meta
          name='naver-site-verification'
          content='5fb1a65fa1d8d5279f89ef94991022465d244d40'
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        {/* <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script> */}
      </body>
    </html>
  );
}

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='scroll-smooth' lang='ko'>
      <head>
        <title>한울메탈릭스</title>
        <meta property='og:site_name' content='한울메탈릭스' />
        <meta property='og:locale' content='ko' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:title' content='한울메탈릭스' />
        <meta property='og:url' content='웹페이지 URL' />
        <meta property='og:type' content='website' />

        <meta
          name='naver-site-verification'
          content='5fb1a65fa1d8d5279f89ef94991022465d244d40'
        />

        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_16x16_qlmtif.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_32x32_dsuaxi.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_57x57_v13wa2.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_60x60_knbx0w.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_72x72_h0vxne.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_76x76_o21bfh.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_96x96_jlah9y.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_114x114_dx1aj5.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_120x120_kup9rg.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_144x144_swffg4.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860926/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_152x152_iqbavq.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860927/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_180x180_rud6gi.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1685860927/%ED%95%9C%EC%9A%B8%EB%A9%94%ED%83%88%EB%A6%AD%EC%8A%A4/favicon_192x192_zzfqkh.png'
        />

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
          name='description'
          content='모든 폐판넬(스티로폼 , 그라스울, 우레탄, 난연) 철거, 처리 및 해양 폐기물 (부표, 스티로폼, 어망) 전문 처리 정식 허가 업체 한울메탈릭스입니다. 저희 한울메탈릭스는 어떠한 조건의 현장과 폐기물도 합리적인 가격과 최고의 작업 노하우로 고객님들을 만족시켜 드리는 환경 기업이 되겠습니다.'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

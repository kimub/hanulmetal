import FooterList from './FooterList';

export default function Footer() {
  return (
    <footer className='bg-black pt-8 text-xs text-white'>
      <div className='wrapper'>
        <table className='border-separate border-spacing-2 md:border-spacing-4'>
          <tbody>
            <FooterList title='상호' description='한울메탈릭스' />
            <FooterList title='대표' description='박인호' />
            <FooterList
              title='주소'
              description='울산 울주군 삼동면 사촌신복로 359-14'
            />
            <FooterList title='사업자번호' description='779-24-01630' />
            <FooterList title='copyright © 한울메탈릭스. all right reserved.' />
          </tbody>
        </table>
      </div>
    </footer>
  );
}

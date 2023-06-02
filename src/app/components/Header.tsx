import Image from 'next/image';
import logo from '../../../public/logo.svg';
import menu from '../../../public/menu.svg';

export default function Header() {
  return (
    <header className='wrapper'>
      <Image src={logo} alt='한울메탈릭스' />
      <Image src={menu} alt='메뉴' />
    </header>
  );
}

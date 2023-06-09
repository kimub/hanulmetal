'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className='hidden md:flex md:items-center'>
      <ul className='mr-4 flex gap-14 font-semibold lg:text-lg'>
        <li className='hover:text-primary'>
          <Link href='/'>홈</Link>
        </li>
        <li className='hover:text-primary'>
          <a href={pathname === '/' ? '#company' : '/#company'}>회사 소개</a>
        </li>
        <li className='hover:text-primary'>
          <a href={pathname === '/' ? '#work' : '/#work'}>주요 업무</a>
        </li>
        <li className='group cursor-pointer'>
          <div className='hover:text-primary'>갤러리</div>
          <div className='invisible absolute bottom-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100'>
            <div className='hover:text-primary'>
              <a href={pathname === '/' ? '#gallery' : '/#gallery'}>
                간단 갤러리
              </a>
            </div>
            <div className='hover:text-primary'>
              <Link href='/gallery'>상세 갤러리</Link>
            </div>
          </div>
        </li>
        <li className='hover:text-primary'>
          <a href={pathname === '/' ? '#inquiry' : '/#inquiry'}>문의</a>
        </li>
      </ul>
    </nav>
  );
}

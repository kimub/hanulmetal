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
          {pathname === '/' ? (
            <a href='#company'>회사 소개</a>
          ) : (
            <Link href='/#company'>회사 소개</Link>
          )}
        </li>
        <li className='hover:text-primary'>
          {pathname === '/' ? (
            <a href='#work'>주요 업무</a>
          ) : (
            <Link href='/#work'>주요 업무</Link>
          )}
        </li>
        <li className='group cursor-pointer'>
          <div className='hover:text-primary'>갤러리</div>
          <div className='invisible absolute bottom-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100'>
            <div className='hover:text-primary'>
              {pathname === '/' ? (
                <a href='#gallery'>간단 갤러리</a>
              ) : (
                <Link href='/#gallery'>간단 갤러리</Link>
              )}
            </div>
            <div className='hover:text-primary'>
              <Link href='/gallery'>상세 갤러리</Link>
            </div>
          </div>
        </li>
        <li className='hover:text-primary'>
          {pathname === '/' ? (
            <a href='#inquiry'>문의</a>
          ) : (
            <Link href='/#inquiry'>문의</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

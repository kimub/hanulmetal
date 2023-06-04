export default function Nav() {
  return (
    <nav className='hidden md:block'>
      <ul className='mr-4 flex gap-8 font-semibold lg:text-lg'>
        <li>
          <a href='#company'>회사 소개</a>
        </li>
        <li>
          <a href='#work'>주요 업무</a>
        </li>
        <li>
          <a href='#gallery'>갤러리</a>
        </li>
        <li>
          <a href='#inquiry'>문의</a>
        </li>
      </ul>
    </nav>
  );
}

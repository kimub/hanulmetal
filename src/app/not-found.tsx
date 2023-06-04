import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='notfound-content-h-m md:notfound-content-h-t lg:notfound-content-h-d flex flex-col items-center justify-center gap-6 p-8'>
      <p className='text-9xl font-bold text-primary'>404</p>
      <p className='text-center text-5xl font-bold'>NOT FOUND</p>
      <Link href='/' className='btn md:mt-5 lg:mt-10'>
        돌아가기
      </Link>
    </section>
  );
}

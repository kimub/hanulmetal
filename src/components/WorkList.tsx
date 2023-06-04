type Props = {
  title: string;
  list: string[];
};

export default function WorkList({ title, list }: Props) {
  return (
    <ul className='mt-8 rounded-2xl bg-white p-8 shadow-md md:w-1/3 md:p-6'>
      <li>
        <h4 className='text-lg font-bold text-primary md:text-base lg:text-xl'>
          {title}
        </h4>
        <ul className='mt-8 flex flex-col gap-4 lg:gap-6'>
          {list.map((item) => (
            <li
              key={item}
              className='rounded-xl bg-secondary py-4 text-sm font-semibold md:py-5 md:text-sm lg:text-base'
            >
              {item}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

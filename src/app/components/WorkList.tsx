type Props = {
  title: string;
  list: string[];
};

export default function WorkList({ title, list }: Props) {
  return (
    <ul className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <li>
        <h4 className='text-xl font-bold text-primary'>{title}</h4>
        <ul className='mt-8 flex flex-col gap-4'>
          {list.map((item) => (
            <li
              key={item}
              className='rounded-3xl bg-secondary py-4 text-sm font-semibold'
            >
              {item}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

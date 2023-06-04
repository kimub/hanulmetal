type Props = {
  title: string;
  description?: string;
};

export default function FooterList({ title, description }: Props) {
  return (
    <tr className='text-left md:text-lg'>
      <td className='w-20' colSpan={description ? 0 : 2}>
        {title}
      </td>
      <td>{description || ''}</td>
    </tr>
  );
}

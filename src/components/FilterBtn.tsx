'use client';

type Props = {
  category: string;
  text: string;
  isActive: boolean;
  onClick: (category: string) => void;
};

export default function FilterBtn({
  category,
  text,
  isActive,
  onClick,
}: Props) {
  return (
    <button
      type='button'
      className={`filtered-btn w-full cursor-pointer md:w-1/4 ${
        isActive || 'btn-disabled'
      }`}
      onClick={() => onClick(category)}
    >
      {text}
    </button>
  );
}

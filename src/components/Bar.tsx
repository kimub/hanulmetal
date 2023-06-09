type Props = {
  text: string;
  isHome: boolean;
};

export default function Bar({ text, isHome }: Props) {
  return (
    <section
      className={`w-full bg-primary py-8 text-center font-bold text-white md:text-xl lg:text-2xl ${
        isHome || 'mt-20'
      }`}
    >
      {text}
    </section>
  );
}

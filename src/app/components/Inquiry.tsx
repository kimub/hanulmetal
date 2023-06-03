import InquiryList from './InquiryList';

export default function Inquiry() {
  return (
    <section className='wrapper bg-secondary'>
      <h2 className='title'>문의</h2>
      <ul>
        <InquiryList />
      </ul>
    </section>
  );
}

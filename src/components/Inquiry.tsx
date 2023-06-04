import InquiryList from './InquiryList';
import phone from '../../public/phone.svg';
import email from '../../public/email.svg';
import pin from '../../public/pin.svg';

export default function Inquiry() {
  return (
    <section className='bg-secondary' id='inquiry'>
      <div className='wrapper'>
        <h2 className='title'>문의</h2>
        <ul className='mt-10 flex flex-col gap-8 lg:flex-row'>
          <InquiryList
            src={phone}
            title='전화, 문자 문의'
            info={['010-9326-5656', '010-4141-0249']}
          />
          <InquiryList
            src={email}
            title='온라인 메일 문의'
            info={['yeon460@naver.com']}
          />
          <InquiryList
            src={pin}
            title='오시는 길'
            info={['울산 울주군 삼동명 사촌신복로 359-14']}
          />
        </ul>
      </div>
    </section>
  );
}

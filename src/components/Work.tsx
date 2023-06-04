import WorkList from './WorkList';

export default function Work() {
  return (
    <section className='bg-secondary' id='work'>
      <div className='wrapper'>
        <h3 className='title'>주요 업무</h3>
        <div className='mt-10 justify-between md:mt-2 md:flex md:gap-8'>
          <WorkList
            title='모든 폐판넬 수거, 철거, 처리'
            list={[
              '그라스울 판넬(유리섬유)',
              '우레탄 판넬',
              '스티로폼 판넬',
              '난연 판넬',
            ]}
          />
          <WorkList
            title='해양 폐기물 수거 및 처리'
            list={['부표(스티로폼)', '어망', '방치 폐기물 수거 작업']}
          />
          <WorkList
            title='사업장 폐기물'
            list={[
              '인테리어 폐기물',
              '이사 전/후 가정집',
              '방치 악성 폐기물(쓰레기집)',
              '유품 정리(소각 가능)',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

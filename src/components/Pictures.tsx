'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FilterBtn from '@/components/FilterBtn';
import { pictures } from '@/service/picures';

export default function Pictures() {
  const [displayData, setDisplayData] = useState(pictures);
  const [active, setActive] = useState('all');

  const handleCategoryClick = (category: string) => {
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === 'all') {
      setDisplayData(pictures);
      return;
    }

    const filteredData = pictures.filter((item) => item.category === category);

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 400);
  };

  return (
    <section className='mt-16 h-full md:mt-24 lg:mt-32'>
      <div className='justify-between md:flex'>
        <FilterBtn
          category='all'
          text='전체'
          isActive={active === 'all'}
          onClick={handleCategoryClick}
        />
        <FilterBtn
          category='panel'
          text='폐 판넬 처리'
          isActive={active === 'panel'}
          onClick={handleCategoryClick}
        />
        <FilterBtn
          category='waste'
          text='폐기물 처리'
          isActive={active === 'waste'}
          onClick={handleCategoryClick}
        />
      </div>
      <div className='mt-20 grid grid-cols-1 gap-2 md:grid-cols-3'>
        <AnimatePresence>
          {displayData.map(({ src }, i) => (
            <motion.div
              style={{ overflow: 'hidden' }}
              key={i}
              layout
              initial={{ transform: 'scale(0)' }}
              animate={{ transform: 'scale(1)' }}
              exit={{ transform: 'scale(0)' }}
            >
              <motion.img
                src={src}
                className='h-full rounded'
                alt='nothing'
                width='100%'
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

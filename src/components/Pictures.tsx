'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FilterBtn from '@/components/FilterBtn';
import { pictures } from '@/service/picures';
import FsLightbox from 'fslightbox-react';

export default function Pictures() {
  const [displayData, setDisplayData] = useState(pictures);
  const [active, setActive] = useState('all');
  const [isShowingImg, setIsShowingImg] = useState({
    toggler: false,
    slide: 1,
  });

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
    <>
      <section className='mt-6 md:mt-12'>
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
        <div className='mt-20 grid grid-cols-1 gap-2 base:grid-cols-2 md:grid-cols-3'>
          <AnimatePresence>
            {displayData.map(({ src, lightboxSrc }, i) => (
              <motion.div
                style={{ overflow: 'hidden' }}
                key={i}
                layout
                initial={{ transform: 'scale(0)' }}
                animate={{ transform: 'scale(1)' }}
                exit={{ transform: 'scale(0)' }}
              >
                <div
                  onClick={() =>
                    setIsShowingImg((prev) => ({
                      toggler: !prev.toggler,
                      slide: i + 1,
                    }))
                  }
                >
                  <motion.img
                    src={src}
                    className='h-full rounded object-cover hover:cursor-pointer hover:brightness-50'
                    alt={lightboxSrc}
                    width='100%'
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {active === 'all' && (
          <FsLightbox
            toggler={isShowingImg.toggler}
            sources={pictures.map((item) => item.lightboxSrc)}
            slide={isShowingImg.slide}
          />
        )}
        {active === 'panel' && (
          <FsLightbox
            toggler={isShowingImg.toggler}
            sources={pictures
              .filter((item) => item.category === 'panel')
              .map((item) => item.lightboxSrc)}
            slide={isShowingImg.slide}
          />
        )}
        {active === 'waste' && (
          <FsLightbox
            toggler={isShowingImg.toggler}
            sources={pictures
              .filter((item) => item.category === 'waste')
              .map((item) => item.lightboxSrc)}
            slide={isShowingImg.slide}
          />
        )}
      </section>
    </>
  );
}

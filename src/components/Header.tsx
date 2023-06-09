'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Nav from './Nav';
import { useHeaderInteractive } from '../hooks/useHeaderInteractive';
import logo from '../../public/logo.svg';
import { CgMenu } from 'react-icons/cg';
import { useEffect, useLayoutEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import CustomDrawer from './CustomDrawer';

export default function Header() {
  const pathname = usePathname();
  const [isShowingDrawer, setIsShowingDrawer] = useState({ topNav: false });
  const { isScroll } = useHeaderInteractive();

  useLayoutEffect(() => {
    window.addEventListener('resize', () => {
      setIsShowingDrawer((prev) => ({ ...prev, topNav: false }));
    });
  }, []);

  const list = () => (
    <Box
      sx={{ width: '100%' }}
      role='presentation'
      onClick={() => setIsShowingDrawer((prev) => ({ ...prev, topNav: false }))}
      onKeyDown={() =>
        setIsShowingDrawer((prev) => ({ ...prev, topNav: false }))
      }
    >
      <Divider />
      <List>
        {[
          { text: '홈', href: '/', code: 'home', icon: <HomeIcon /> },
          {
            text: '회사 소개',
            href: '/#company',
            code: 'company',
            icon: <ApartmentIcon />,
          },
          {
            text: '주요 업무',
            href: '/#work',
            code: 'work',
            icon: <WorkIcon />,
          },
          {
            text: '간단 갤러리',
            href: '/#gallery',
            code: 'gallery',
            icon: <CollectionsIcon />,
          },
          {
            text: '상세 갤러리',
            href: '/gallery',
            code: 'detailGallery',
            icon: <CollectionsIcon />,
          },
          {
            text: '문의',
            href: '/#inquiry',
            code: 'inquiry',
            icon: <CallIcon />,
          },
        ].map(({ text, href, code, icon }, index) => {
          if (code === 'home' || code === 'detailGallery') {
            return (
              <ListItem key={text} disablePadding>
                <Link href={href} className='w-full'>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          }

          return (
            <ListItem key={text} disablePadding>
              <a href={href} className='w-full'>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </a>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-10 w-full bg-white transition-all duration-300 ${
        isScroll ? 'opacity-90' : ''
      }`}
    >
      <div className='safe-area-pt-3 md:safe-area-pt-6 mx-auto flex max-w-screen-xl justify-between border-secondary px-4 pb-3 transition-all duration-300 md:justify-between md:pb-6 md:hover:mb-10 md:hover:mt-2'>
        <Link href='/'>
          <Image
            src={logo}
            className='w-28 md:w-40 lg:w-auto'
            alt='한울메탈릭스'
            priority
          />
        </Link>
        {(pathname === '/' || pathname === '/gallery') && <Nav />}
        <CgMenu
          size={36}
          className='block cursor-pointer md:hidden'
          onClick={() =>
            setIsShowingDrawer((prev) => ({ ...prev, topNav: true }))
          }
        />
      </div>
      {isShowingDrawer && (
        <CustomDrawer
          isShowingDrawer={isShowingDrawer}
          onIsShowingDrawer={setIsShowingDrawer}
          list={list}
        />
      )}
    </header>
  );
}

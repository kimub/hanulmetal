import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { SetStateAction } from 'react';

type Props = {
  isShowingDrawer: { topNav: boolean };
  onIsShowingDrawer: (
    isShowingDrawer: SetStateAction<{
      topNav: boolean;
    }>
  ) => void;
  list: () => JSX.Element;
};

export default function CustomDrawer({
  isShowingDrawer,
  onIsShowingDrawer,
  list,
}: Props) {
  const handleNav = () => {
    onIsShowingDrawer((prev: { topNav: boolean }) => ({
      ...prev,
      topNav: false,
    }));
    return;
  };

  return (
    <Drawer
      open={isShowingDrawer.topNav}
      onClose={() => handleNav()}
      anchor='top'
    >
      <Box sx={{ py: 2 }}>{list()}</Box>
    </Drawer>
  );
}

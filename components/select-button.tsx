import Button from '@/components/ui/button';
import { cn } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { MissionTab } from '@/types/mission.type';
import { memo } from 'react';

type SelectButtonProps = {
  mission: MissionTab;
  active?: boolean;
  onClick?: () => void;
};

const SelectButton = ({ mission, active, onClick }: SelectButtonProps) => {
  // const [ref, { width }] = useMeasure();
  //
  // console.log(width);

  return (
    <Button
      className={cn(
        'duration-250 flex cursor-pointer items-center justify-start rounded-full border-none bg-white/35 p-0 px-3 py-1 backdrop-blur-lg transition-all hover:bg-white/60',
        active && 'bg-white/60'
      )}
      onClick={onClick}
    >
      <AnimatePresence mode={'popLayout'}>
        {active && (
          <motion.div
            layout
            animate={{
              opacity: 1,
              x: 0,
              marginRight: '1rem',
            }}
            className='cursor h-2.5 w-2.5 rounded-full bg-black'
          />
        )}
      </AnimatePresence>
      <motion.span className={'text-nowrap text-sm'}>
        {mission?.text}
      </motion.span>
    </Button>
  );
};

export default memo(SelectButton);

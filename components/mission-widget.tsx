'use client';

import { useState } from 'react';
import { missions, missionTabs } from '@/constants/data';
import { cn } from '@/utils';
import Image from 'next/image';
import SelectButton from '@/components/select-button';
import { MotionConfig } from 'framer-motion';

type MissionWidgetProps = {};

const MissionWidget = ({}: MissionWidgetProps) => {
  const [selected, setSelected] = useState<number>(1);

  const mission = missions?.find((mission) => mission.id === selected);

  return (
    <MotionConfig
      transition={{
        bounce: 0,
      }}
    >
      <figure className='relative m-0 flex aspect-[11/7] w-full flex-col justify-between overflow-hidden rounded-2xl p-4 pb-8'>
        <div
          className={
            'absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t from-black to-transparent'
          }
        />
        <div className='z-10 flex items-center gap-4'>
          {missionTabs?.map((tab) => (
            <SelectButton
              key={`tab-${tab?.id}`}
              mission={tab}
              active={mission?.id === tab?.id}
              onClick={() => setSelected(tab?.id)}
            />
          ))}
        </div>
        {missions?.map((item) => (
          <>
            {item?.type === 'video' ? (
              <video
                key={`video-${item?.id}`}
                className={cn(
                  'absolute inset-0',
                  mission?.media === item?.media ? 'opacity-100' : 'opacity-0'
                )}
                src={item?.media}
              />
            ) : (
              <Image
                src={item?.media as string}
                fill
                loading={'eager'}
                alt={''}
                key={`image-${item?.id}`}
                className={cn(
                  'object-cover object-center',
                  mission?.media === item?.media ? 'opacity-100' : 'opacity-0'
                )}
              />
            )}
          </>
        ))}
        <figcaption
          className={
            'z-10 max-w-[50%] break-words text-3xl leading-[1.1] tracking-tight text-white'
          }
        >
          {mission?.text}
        </figcaption>
      </figure>
    </MotionConfig>
  );
};

export default MissionWidget;

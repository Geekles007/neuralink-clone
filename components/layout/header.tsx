'use client';

import Link from 'next/link';
import { mainLinks } from '@/constants/links';
import Button from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useState } from 'react';
import { cn } from '@/utils';

gsap.registerPlugin(ScrollTrigger);

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (self.scroll() > 350) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed top-0 z-50 w-full px-3.5 transition-all',
        active && 'bg-white'
      )}
    >
      <div className='flex h-14 items-center justify-between'>
        <Link href={'/'}>
          <svg
            width='56'
            height='35'
            viewBox='0 0 56 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='_logo_u5k48_26'
          >
            <path
              fill={active ? 'black' : 'white'}
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M30.8777 22.4886H0.705078L22.5011 2.28693C24.3585 0.565492 27.0293 -0.000275522 29.47 0.809903C31.9102 1.62058 33.6439 3.6498 33.994 6.10498L37.476 30.5019C37.5803 31.2306 38.0767 31.8049 38.8036 32.0367C39.5305 32.2696 40.2868 32.0946 40.8255 31.572L50.1712 22.4886H39.4676L39.1096 20.2688H55.7051L42.4717 33.131C41.6499 33.9302 40.5593 34.3566 39.4367 34.3566C38.9823 34.3566 38.5221 34.2862 38.073 34.1429C36.5143 33.6455 35.4074 32.3656 35.1842 30.8031L31.7021 6.40672C31.4673 4.75921 30.3499 3.45166 28.7127 2.90802C27.0759 2.36337 25.3548 2.72899 24.108 3.88365L6.42923 20.2688H30.5522L30.8777 22.4886Z'
            />
          </svg>
        </Link>
        <div className='flex items-center gap-6'>
          {mainLinks.map((link, index) => {
            return (
              <Link
                className={cn('text-lg text-white', active && 'text-black')}
                key={`link-${index}`}
                href={link?.href}
              >
                {link?.name}
              </Link>
            );
          })}
          <Button
            type={'button'}
            href={'/'}
            className={cn(
              'text-lg text-white transition-all hover:bg-white hover:text-black',
              active &&
                'border-black text-black hover:bg-black hover:text-white'
            )}
          >
            Patient Registry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

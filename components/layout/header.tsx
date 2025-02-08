import Image from 'next/image';
import Link from 'next/link';
import { mainLinks } from '@/constants/links';
import Button from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  useEffect(() => {
    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        console.log('Scroll position:', self.scroll());
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={'fixed top-0 z-50 w-full px-3.5'}>
      <div className='flex h-14 items-center justify-between'>
        <Link href={'/'}>
          <Image
            src={'/logo.svg'}
            alt={''}
            width={50}
            height={35}
            className={'object-contain object-center'}
          />
        </Link>
        <div className='flex items-center gap-6'>
          {mainLinks.map((link, index) => {
            return (
              <Link
                className={'text-lg text-white'}
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
            className={
              'text-lg text-white transition-all hover:bg-white hover:text-black'
            }
          >
            Patient Registry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

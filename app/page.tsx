import Header from '@/components/layout/header';
import Button from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import SectionLayout from '@/components/layout/section-layout';
import MissionWidget from '@/components/mission-widget';

export default function Home() {
  return (
    <>
      <Header />
      <SectionLayout
        className={
          'bg-banner-image relative flex h-screen items-center bg-cover bg-center bg-no-repeat'
        }
        style={{
          backgroundImage: `url('/images/banner.webp')`,
        }}
      >
        <div className='pointer-events-none absolute left-0 h-full w-full bg-gradient-to-r from-black to-transparent'></div>
        <div className='z-50 flex max-w-[800px] flex-col items-start'>
          <h1 className={'text-[2.8rem] font-light leading-[110%] text-white'}>
            Redefining the boundaries of human capabilities requires{' '}
            <strong className={'font-bold'}>pioneers.</strong>
          </h1>
          <p className={'my-9 text-2xl text-white'}>
            Neuralink is currently seeking people with quadriplegia to
            participate in a groundbreaking investigational medical device
            clinical trial for our brain-computer interface.
          </p>
          <p className={'mb-9 text-2xl text-white'}>
            If you have quadriplegia and want to explore new ways of controlling
            your computer, please consider joining our Patient Registry.
          </p>
          <Button
            type={'button'}
            className={
              'group flex items-center gap-1 bg-white/[0.05] px-10 py-6 text-xl text-white transition-all hover:bg-white/[0.1]'
            }
          >
            <span>Visit Our Patient Registry</span>
            <ArrowUpRight
              className={
                'transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
              }
            />
          </Button>
        </div>
      </SectionLayout>
      <SectionLayout className={'bg-white'}>
        <div className='flex flex-col'>
          <div className='mb-32 flex flex-col gap-5 text-black'>
            <h2 className={'text-lg md:text-2xl'}>Our Mission</h2>
            <h3 className={'text-2xl leading-[110%] md:text-[2.4rem]'}>
              Create a generalized brain interface to restore autonomy to those
              with unmet medical needs today and unlock human potential
              tomorrow.
            </h3>
          </div>
          <div className=''>
            <MissionWidget />
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

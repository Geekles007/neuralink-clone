import { HTMLAttributes } from 'react';
import { cn } from '@/utils';

type SectionLayoutProps = HTMLAttributes<HTMLElement> & {};

const SectionLayout = ({
  className,
  children,
  ...props
}: SectionLayoutProps) => {
  return (
    <section
      className={cn(
        'min-h-screen p-5 max-md:py-32 md:p-32 xl:px-60',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionLayout;

'use client';

import { AnchorHTMLAttributes } from 'react';
import { cn } from '@/utils';
import { HTMLMotionProps, motion } from 'framer-motion';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<HTMLMotionProps<'a'>, 'ref'> & {
    type?: 'button' | 'link';
  };

const Button = ({ className, children, type, ...props }: ButtonProps) => {
  return (
    <motion.a
      {...props}
      className={cn(
        'cursor-pointer py-1',
        type === 'button' &&
          'overflow-hidden rounded-full border border-solid border-white px-4',
        className
      )}
    >
      {children}
    </motion.a>
  );
};

export default Button;

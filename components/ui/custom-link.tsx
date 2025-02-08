import Link, { LinkProps } from 'next/link';
import { cn } from '@/utils';
import { AnchorHTMLAttributes } from 'react';

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & {};

const CustomLink = ({ className, children, ...props }: CustomLinkProps) => {
  return (
    <Link
      className={cn(
        `relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:w-full`,
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

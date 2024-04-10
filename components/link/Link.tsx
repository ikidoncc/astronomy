import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface LinkProps extends ComponentProps<'a'> {}

export function Link({ children, className, ...props }: LinkProps) {
  return (
    <a
      className={twMerge(
        'hover:underline hover:text-rosePineDawn-love transition-all',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

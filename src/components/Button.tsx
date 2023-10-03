import clsx from 'clsx'

export enum Variant {
  Primary = 'bg-primary text-white',
  Secondary = 'bg-gray-800 text-white', // @todo
}

interface Props {
  children: React.ReactNode;
  variant?: Variant;
}

export default function Button({ children, variant = Variant.Primary, ...rest }: Props & React.ComponentProps<'button'>) {
  const { className, ...restAttributes } = rest
  const _className = clsx('button', variant, className)

  return <button className={_className} {...restAttributes}>{children}</button>
}

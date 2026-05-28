import './Button.scss'

export default function Button({
  variant = 'solid',
  size = 'md',
  href,
  className = '',
  onClick,
  children,
}) {
  const cls = ['btn-base', `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(' ')

  if (href !== undefined) {
    return <a href={href} className={cls}>{children}</a>
  }
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  )
}

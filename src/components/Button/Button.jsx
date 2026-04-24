import './Button.css'

function Button({ children, href = '#/contact', variant = 'primary' }) {
  return (
    <a className={`button button--${variant}`} href={href}>
      {children}
    </a>
  )
}

export default Button

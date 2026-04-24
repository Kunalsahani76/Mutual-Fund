import Button from '../Button/Button'
import './Navbar.css'

const navItems = [
  { label: 'Home', href: '#/home' },
  { label: 'About Us', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Blogs', href: '#/blogs' },
]

function Navbar({ currentRoute }) {
  return (
    <header className="navbar-wrap">
      <div className="page-shell">
        <nav className="navbar" aria-label="Primary">
          <a className="navbar__brand" href="#/home">
            PrimeVista Wealth Advisor
          </a>

          <ul className="navbar__menu">
            {navItems.map((item) => {
              const isActive = currentRoute === item.href

              return (
                <li key={item.href}>
                  <a
                    className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <Button href="#/contact">CONTACT US ↗</Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

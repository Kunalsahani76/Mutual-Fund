import { useState } from 'react'
import Button from '../Button/Button'
import logo from '../../assets/icons/logo.png'
import './Navbar.css'

const navItems = [
  { label: 'Home', href: '#/home' },
  { label: 'About Us', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Blogs', href: '#/blogs' },
]

function Navbar({ currentRoute }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar-wrap">
      <div className="page-shell">
        <nav className="navbar" aria-label="Primary">
          <a className="navbar__brand" href="#/home">
            <img className="navbar__logo" src={logo} alt="PrimeVista Wealth Advisor" />
          </a>

          <button
            className={`navbar__toggle${isMenuOpen ? ' navbar__toggle--open' : ''}`}
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            className={`navbar__panel${isMenuOpen ? ' navbar__panel--open' : ''}`}
            id="primary-navigation"
            onClickCapture={(event) => {
              if (event.target.closest('a')) {
                closeMenu()
              }
            }}
          >
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

            <div className="navbar__cta">
              <Button href="#/contact">CONTACT US ↗</Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

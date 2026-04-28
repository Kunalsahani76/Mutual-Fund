import logo from '../../assets/icons/logo.png'
import './Footer.css'

const navigationLinks = [
  { label: 'Home', href: '#/home' },
  { label: 'About Us', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Blogs', href: '#/blogs' },
  { label: 'Contact', href: '#/contact' },
]

const contactDetails = [
  {
    label: 'malviyaashutosh100@gmail.com',
    href: 'mailto:malviyaashutosh100@gmail.com',
    icon: 'mail',
  },
  {
    label: '+91-8800442431',
    href: 'tel:+918800442431',
    icon: 'phone',
  },
  {
    label: 'Noida',
    href: '#/contact',
    icon: 'location',
  },
  {
    label: 'Amalviya@pvwa.in',
    href: 'mailto:Amalviya@pvwa.in',
    icon: 'web',
  },
  {
    label: 'vsharma@pvwa.in',
    href: 'mailto:vsharma@pvwa.in',
    icon: 'web',
  },
]

function ContactIcon({ type }) {
  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 6.5h17v11h-17z" />
        <path d="m4.5 7.5 8 6 8-6" />
      </svg>
    )
  }

  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 5h3l1.2 4-1.8 1.8a15 15 0 0 0 3.8 3.8L15 12l4 1.2v3c0 .6-.4 1-1 1A14 14 0 0 1 5 6c0-.6.4-1 1-1Z" />
        <path d="M14.5 6.5a4 4 0 0 1 3 3" />
        <path d="M14.5 3.5a7 7 0 0 1 6 6" />
      </svg>
    )
  }

  if (type === 'location') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20s-5.5-5.6-5.5-10A5.5 5.5 0 1 1 17.5 10c0 4.4-5.5 10-5.5 10Z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.4 2.3 3.7 5.2 3.7 8.5S14.4 18.2 12 20.5c-2.4-2.3-3.7-5.2-3.7-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  )
}

function Footer() {
  const scrollToContactMap = () => {
    const mapSection = document.getElementById('contact-map')

    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleFooterNavigationClick = (event, href) => {
    event.preventDefault()

    if (window.location.hash !== href) {
      window.location.hash = href
    }

    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }

  const handleMapLinkClick = (event) => {
    event.preventDefault()

    if (window.location.hash !== '#/contact') {
      window.location.hash = '#/contact'
    }

    window.setTimeout(scrollToContactMap, 80)
  }

  return (
    <footer className="footer">
      <div className="page-shell footer__inner">
        <div className="footer__top">
          <div className="footer__brand-block">
            <a className="footer__brand-logo-link" href="#/home" aria-label="PrimeVista home">
              <img className="footer__brand-logo" src={logo} alt="PrimeVista" />
            </a>
            <p className="footer__description">
              Elevating investment standards through integrity, research, and
              client-centricity. Your trusted partner in digital wealth management.
            </p>

            <div className="footer__socials" aria-label="Contact options">
              <a className="footer__icon-link" href="mailto:malviyaashutosh100@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6.5h16v11H4z" />
                  <path d="m5 7.5 7 6 7-6" />
                </svg>
              </a>
              <a className="footer__icon-link" href="tel:+919999999999" aria-label="Phone">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 5h3l1.2 4-1.8 1.8a15 15 0 0 0 3.8 3.8L15 12l4 1.2v3c0 .6-.4 1-1 1A14 14 0 0 1 5 6c0-.6.4-1 1-1Z" />
                  <path d="M14.5 6.5a4 4 0 0 1 3 3" />
                  <path d="M14.5 3.5a7 7 0 0 1 6 6" />
                </svg>
              </a>
              <a
                className="footer__icon-link"
                href="#/contact"
                aria-label="Location"
                onClick={handleMapLinkClick}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 20s-5.5-5.6-5.5-10A5.5 5.5 0 1 1 17.5 10c0 4.4-5.5 10-5.5 10Z" />
                  <circle cx="12" cy="10" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links-group">
            <div>
              <h3 className="footer__heading">Navigation</h3>
              <ul className="footer__links">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(event) =>
                        handleFooterNavigationClick(event, link.href)
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer__heading">Contact Details</h3>
              <ul className="footer__contact-list">
                {contactDetails.map((item) => (
                  <li key={item.label}>
                    <a
                      className="footer__contact-item"
                      href={item.href}
                      onClick={
                        item.icon === 'location' ? handleMapLinkClick : undefined
                      }
                    >
                      <span className="footer__contact-icon">
                        <ContactIcon type={item.icon} />
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 PrimeVista Wealth Advisors. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

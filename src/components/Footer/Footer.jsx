import './Footer.css'

const navigationLinks = [
  { label: 'Home', href: '#/home' },
  { label: 'About Us', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Contact', href: '#/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#/privacy-policy' },
  { label: 'Terms of Service', href: '#/terms-of-service' },
  { label: 'Disclosures', href: '#/disclosures' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell footer__inner">
        <div className="footer__top">
          <div className="footer__brand-block">
            <h2 className="footer__brand">PrimeVista Wealth Advisors</h2>
            <p className="footer__description">
              Elevating investment standards through integrity, research, and
              client-centricity. Your trusted partner in digital wealth management.
            </p>

            <div className="footer__socials" aria-label="Contact options">
              <a className="footer__icon-link" href="mailto:hello@primevista.com" aria-label="Email">
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
              <a className="footer__icon-link" href="#/contact" aria-label="Location">
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
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer__heading">Legal</h3>
              <ul className="footer__links">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 PrimeVista Wealth Advisors. All rights reserved. SEBI Registered
            Investment Advisor.
          </p>
          <a className="footer__support" href="#/contact">
            Contact Support
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

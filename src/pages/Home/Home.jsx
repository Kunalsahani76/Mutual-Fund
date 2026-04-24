import homeHero from '../../assets/images/homehero.png'
import advisorImage from '../../assets/images/hero.png'
import Button from '../../components/Button/Button'
import './Home.css'

const serviceItems = [
  {
    title: 'Mutual Fund',
    description:
      'Diversified equity and debt portfolios tailored to your risk appetite and financial horizons.',
    icon: 'fund',
  },
  {
    title: 'Insurance',
    description:
      'Comprehensive risk management solutions providing security for your family and assets.',
    icon: 'shield',
  },
  {
    title: 'NRI Services',
    description:
      "Specialized advisory for non-residents looking to capitalize on India's growth story.",
    icon: 'globe',
  },
  {
    title: 'HNI Services',
    description:
      'Bespoke portfolio management and estate planning for high net-worth individuals.',
    icon: 'diamond',
  },
]

function ServiceIcon({ type }) {
  if (type === 'shield') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v5c0 4.5 2.9 8.5 7 9.8 4.1-1.3 7-5.3 7-9.8V6l-7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.7" />
      </svg>
    )
  }

  if (type === 'globe') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
        <path d="M4.5 12h15" />
        <path d="M12 4c2.2 2.3 3.4 5 3.4 8S14.2 17.7 12 20c-2.2-2.3-3.4-5-3.4-8S9.8 6.3 12 4Z" />
      </svg>
    )
  }

  if (type === 'diamond') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7.5 9 4h6l3 3.5-6 12-6-12Z" />
        <path d="M9 4 12 7.5 15 4" />
        <path d="M6 7.5h12" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="1.8" />
      <path d="M9 9h6v6H9z" />
      <path d="M15 12h3" />
    </svg>
  )
}

function PartnerIcon({ type }) {
  if (type === 'trust') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 7 4.5 4.5L8 14" />
        <path d="M11 4.5 19.5 13" />
        <path d="m4.5 11 8.5 8.5" />
        <path d="M12.5 8.5 16 5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 16.5 9.2 12l3 3 6.3-7" />
      <path d="M5 7.5v3.8h3.8" />
      <path d="M15.5 6h3v3" />
      <circle cx="9.2" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12.2" cy="15" r="1" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Home() {
  return (
    <>
      <section
        className="home"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(4, 17, 38, 0.96) 0%, rgba(4, 17, 38, 0.82) 34%, rgba(4, 17, 38, 0.32) 58%, rgba(4, 17, 38, 0.12) 100%), url(${homeHero})`,
        }}
      >
        <div className="page-shell home__inner">
          <div className="home__copy">
            <h1 className="home__title">
              Plan Today for a
              <br />
              Prosperous
              <br />
              Tomorrow
            </h1>

            <p className="home__description">
              With Trinity Finvest, you have a trusted partner dedicated to help you
              achieve your financial goals.
            </p>

            <div className="home__actions">
              <Button href="#/contact">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="wealth-section">
        <div className="page-shell wealth-section__inner">
          <div className="wealth-section__header">
            <h2 className="wealth-section__title">Strategic Wealth Solutions</h2>
            <p className="wealth-section__copy">
              Our services are designed for the discerning investor, focusing on capital
              preservation and long-term appreciation.
            </p>
          </div>

          <div className="wealth-grid">
            {serviceItems.map((item) => (
              <article key={item.title} className="wealth-card">
                <div className="wealth-card__icon">
                  <ServiceIcon type={item.icon} />
                </div>
                <h3 className="wealth-card__title">{item.title}</h3>
                <p className="wealth-card__text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="page-shell partner-section__inner">
          <div className="partner-section__content">
            <div className="partner-section__intro">
              <h2 className="partner-section__title">
                Why Partner With
                <br />
                PrimeVista?
              </h2>
              <p className="partner-section__copy">
                We don't just manage money; we manage futures. Our commitment is built
                on four pillars of institutional trust.
              </p>
            </div>

            <div className="partner-section__points">
              <div className="partner-point">
                <div className="partner-point__icon">
                  <PartnerIcon type="trust" />
                </div>
                <div>
                  <h3 className="partner-point__title">Trusted Advisors</h3>
                  <p className="partner-point__text">
                    SEBI registered transparency in every transaction.
                  </p>
                </div>
              </div>

              <div className="partner-point">
                <div className="partner-point__icon">
                  <PartnerIcon type="planning" />
                </div>
                <div>
                  <h3 className="partner-point__title">Expert Financial Planning</h3>
                  <p className="partner-point__text">
                    Data-driven strategies led by industry veterans.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="partner-section__visuals">
            <div className="partner-cards">
              <article className="partner-card partner-card--outline">
                <h3 className="partner-card__title">
                  Long-term Growth
                  <br />
                  Focus
                </h3>
                <p className="partner-card__text">
                  Compounding excellence through disciplined market participation over
                  decades.
                </p>
              </article>

              <article className="partner-card partner-card--filled">
                <h3 className="partner-card__title">Secure Investments</h3>
                <p className="partner-card__text">
                  Bank-grade security protocols for your assets and confidential
                  financial information.
                </p>
              </article>
            </div>

            <article className="partner-highlight">
              <div className="partner-highlight__image-wrap">
                <img
                  className="partner-highlight__image"
                  src={advisorImage}
                  alt="Advisor portrait"
                />
              </div>
              <div className="partner-highlight__copy">
                <h3 className="partner-highlight__title">Private Wealth Management</h3>
                <p className="partner-highlight__text">
                  Access exclusive investment avenues and alternative assets usually
                  reserved for institutional players.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="invest-cta">
        <div className="page-shell">
          <div className="invest-cta__panel">
            <h2 className="invest-cta__title">Ready to invest?</h2>
            <p className="invest-cta__copy">
              Join 10M+ users who trust The Sovereign Investor for their wealth
              creation journey.
            </p>
            <a className="invest-cta__button" href="#/contact">
              Talk To Advisor
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

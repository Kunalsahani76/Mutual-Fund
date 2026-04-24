import Button from '../../components/Button/Button'
import aboutHero from '../../assets/images/abouthero.png'
import ourMission from '../../assets/images/ourmission.png'
import ourVision from '../../assets/images/ourvision.png'
import trustedAdvisor from '../../assets/images/trustedadvisor.png'
import expertPlanning from '../../assets/images/expertplanning.png'
import growthFocus from '../../assets/images/growthfocus.png'
import secureInvestment from '../../assets/images/secureinvestment.png'
import './About.css'

const advantageItems = [
  {
    title: 'TRUSTED ADVISORS',
    description: 'Fiduciary standard of care in every client interaction.',
    image: trustedAdvisor,
    alt: 'Trusted advisors',
  },
  {
    title: 'EXPERT PLANNING',
    description: 'Sophisticated modeling for complex financial scenarios',
    image: expertPlanning,
    alt: 'Expert planning',
  },
  {
    title: 'GROWTH FOCUS',
    description: 'Targeting resilient performance across market cycles.',
    image: growthFocus,
    alt: 'Growth focus',
  },
  {
    title: 'SECURE INVESTMENTS',
    description: 'Multi-layered risk management for capital preservation.',
    image: secureInvestment,
    alt: 'Secure investments',
  },
]

function About() {
  return (
    <>
      <section className="about-hero">
        <div
          className="about-hero__media"
          style={{ backgroundImage: `url(${aboutHero})` }}
          aria-hidden="true"
        />

        <div className="page-shell about-hero__shell">
          <div className="about-hero__content">
            <p className="about-hero__eyebrow">About PrimeVista</p>
            <h1 className="about-hero__title">
              About PrimeVista
              <br />
              Wealth Advisors
            </h1>
            <p className="about-hero__description">
              Our mission is to empower individuals and institutions through
              precision-led financial strategies, fostering a legacy of growth and
              uncompromising security in an ever-evolving global market.
            </p>

            <div className="about-hero__actions">
              <Button href="#/services">See Services</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="page-shell about-intro__inner">
          <h2 className="about-intro__title">Decades of Sophisticated Expertise</h2>
          <p className="about-intro__copy">
            Founded on the principles of transparency and intellectual rigor, PrimeVista
            Wealth Advisors has evolved into a cornerstone of financial stability. Our
            multidisciplinary team specializes in complex financial planning, curated
            mutual fund selections, and bespoke wealth management solutions. We don't
            just manage assets; we steward the future of our clients with a focus on
            risk mitigation and sustainable capital appreciation.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="page-shell about-values__inner">
          <article className="about-values__card">
            <div className="about-values__content">
              <div className="about-values__icon" aria-hidden="true">
                <svg viewBox="0 0 64 64">
                  <path d="M22 42c-1.4 4.2-5.5 6.7-10 6 0-4.5 2.7-8.6 7-10" />
                  <path d="m26 38-10-10c6-12.8 17.6-18.8 30-16-1.8 12.4-7.8 24-20 30Z" />
                  <path d="m35 29 11-11" />
                  <circle cx="41.5" cy="22.5" r="3.5" />
                </svg>
              </div>
              <h2 className="about-values__title">OUR MISSION</h2>
              <p className="about-values__text">
                To provide institutional-grade wealth management to private clients,
                ensuring every financial decision is backed by deep analytical insights
                and a commitment to absolute integrity.
              </p>
            </div>
            <div className="about-values__media">
              <img src={ourMission} alt="Our mission" />
            </div>
          </article>

          <article className="about-values__card about-values__card--reverse">
            <div className="about-values__media">
              <img src={ourVision} alt="Our vision" />
            </div>
            <div className="about-values__content">
              <div className="about-values__icon" aria-hidden="true">
                <svg viewBox="0 0 64 64">
                  <path d="M8 32s9-14 24-14 24 14 24 14-9 14-24 14S8 32 8 32Z" />
                  <circle cx="32" cy="32" r="8" />
                </svg>
              </div>
              <h2 className="about-values__title">OUR VISION</h2>
              <p className="about-values__text">
                To provide institutional-grade wealth management to private clients,
                ensuring every financial decision is backed by deep analytical insights
                and a commitment to absolute integrity.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="about-advantage">
        <div className="page-shell">
          <h2 className="about-advantage__title">The PrimeVista Advantage</h2>

          <div className="about-advantage__grid">
            {advantageItems.map((item) => (
              <article key={item.title} className="about-advantage__card">
                <img
                  className="about-advantage__image"
                  src={item.image}
                  alt={item.alt}
                />
                <div className="about-advantage__overlay">
                  <h3 className="about-advantage__card-title">{item.title}</h3>
                  <p className="about-advantage__card-text">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="page-shell">
          <div className="about-cta__panel">
            <h2 className="about-cta__title">Start Your Financial Journey Today</h2>
            <p className="about-cta__text">
              Connect with our advisory team for a private consultation regarding your
              portfolio goals and long-term strategy.
            </p>
            <a className="about-cta__button" href="#/contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

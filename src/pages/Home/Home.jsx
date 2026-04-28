import homeHero from '../../assets/images/homehero.png'
import advisorImage from '../../assets/images/Private Wealth Management.jpg'
import mutualFundIcon from '../../assets/icons/Mutual Fund.png'
import insuranceIcon from '../../assets/icons/Insurance.png'
import nriServicesIcon from '../../assets/icons/NRI Services.png'
import hniServicesIcon from '../../assets/icons/HNI Services.png'
import trustedAdvisorsIcon from '../../assets/icons/Trusted Advisors.png'
import expertFinancialPlanningIcon from '../../assets/icons/Expert Financial Planning.png'
import Button from '../../components/Button/Button'
import './Home.css'

const serviceItems = [
  {
    title: 'Mutual Fund',
    description:
      'Diversified equity and debt portfolios tailored to your risk appetite and financial horizons.',
    icon: mutualFundIcon,
  },
  {
    title: 'Insurance',
    description:
      'Comprehensive risk management solutions providing security for your family and assets.',
    icon: insuranceIcon,
  },
  {
    title: 'NRI Services',
    description:
      "Specialized advisory for non-residents looking to capitalize on India's growth story.",
    icon: nriServicesIcon,
  },
  {
    title: 'HNI Services',
    description:
      'Bespoke portfolio management and estate planning for high net-worth individuals.',
    icon: hniServicesIcon,
  },
]

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
              <span className="home__title-line">Plan Today for a</span>
              <span className="home__title-line">Prosperous</span>
              <span className="home__title-line">Tomorrow</span>
            </h1>

            <p className="home__description">
              With PrimeVista Wealth Advisor, you have a trusted partner dedicated to help you
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
                  <img src={item.icon} alt="" aria-hidden="true" />
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
                We help you plan with clarity, consistency, and a long-term
                approach to your financial goals.
              </p>
            </div>

            <div className="partner-section__points">
              <div className="partner-point">
                <div className="partner-point__icon">
                  <img src={trustedAdvisorsIcon} alt="" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="partner-point__title">ARN-352810</h3>
                  <p className="partner-point__text">
                    AMFI registered Mutual Fund Distributor.
                  </p>
                </div>
              </div>

              <div className="partner-point">
                <div className="partner-point__icon">
                  <img src={expertFinancialPlanningIcon} alt="" aria-hidden="true" />
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
                <h3 className="partner-card__title">Investment Guidance</h3>
                <p className="partner-card__text">
                  Goal-focused planning with clear communication at every step.
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
                <h3 className="partner-highlight__title">Wealth Planning</h3>
                <p className="partner-highlight__text">
                  Mutual fund guidance aligned with your risk profile and
                  investment horizon.
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
               Users who trust The Sovereign Investor for their wealth
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

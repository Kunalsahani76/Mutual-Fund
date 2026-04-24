import './Contact.css'
import contactHero from '../../assets/images/contacthero.png'
import mapImage from '../../assets/images/map.jpg'

const contactDetails = [
  {
    title: 'Our Headquarters',
    value: 'Noida',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10Z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Direct Line',
    value: '+91-8800442431',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.7 4.5h3.1l1.2 4-1.9 1.9a15.4 15.4 0 0 0 4.5 4.5l1.9-1.9 4 1.2v3.1c0 .7-.6 1.2-1.2 1.2A14.5 14.5 0 0 1 5.5 5.7c0-.7.5-1.2 1.2-1.2Z" />
      </svg>
    ),
  },
  {
    title: 'Email Inquiry',
    value: 'malviyaashutosh100@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5h16v11H4z" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    ),
  },
  {
    title: 'Working Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4.5l3 1.5" />
      </svg>
    ),
  },
]

const expertiseTags = [
  'Wealth Structuring',
  'Tax Advisory',
  'Estate Planning',
  'Portfolio Hedging',
]

function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div
          className="contact-hero__background"
          style={{ backgroundImage: `url(${contactHero})` }}
          aria-hidden="true"
        />

        <div className="page-shell contact-hero__shell">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title">Contact Us</h1>
            <p className="contact-hero__description">
              Experience bespoke wealth management tailored to your unique
              horizon. Our advisors are ready to guide your portfolio through
              the complexities of modern markets.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-connect">
        <div className="page-shell contact-connect__grid">
          <div className="contact-connect__form-card">
            <h2 className="contact-connect__title">Send a Message</h2>

            <form className="contact-form">
              <div className="contact-form__row">
                <label className="contact-form__field">
                  <span>Full Name</span>
                  <input type="text" placeholder="John Doe" />
                </label>
                <label className="contact-form__field">
                  <span>Email Address</span>
                  <input type="email" placeholder="john@example.com" />
                </label>
              </div>

              <label className="contact-form__field">
                <span>Phone Number</span>
                <input type="tel" placeholder="+91 98765 43210" />
              </label>

              <label className="contact-form__field">
                <span>Message</span>
                <textarea
                  rows="6"
                  placeholder="Tell us about your investment goals..."
                />
              </label>

              <button type="submit" className="contact-form__submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-connect__sidebar">
            <aside className="contact-info">
              <h2 className="contact-info__title">Contact Information</h2>

              <div className="contact-info__list">
                {contactDetails.map((item) => (
                  <article key={item.title} className="contact-info__item">
                    <div className="contact-info__icon">{item.icon}</div>
                    <div>
                      <p className="contact-info__label">{item.title}</p>
                      <p className="contact-info__value">{item.value}</p>
                    </div>
                  </article>
                ))}
              </div>
            </aside>

            <aside className="contact-expertise">
              <p className="contact-expertise__eyebrow">Our Expertise</p>
              <div className="contact-expertise__tags">
                {expertiseTags.map((tag) => (
                  <span key={tag} className="contact-expertise__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="page-shell">
          <div className="contact-map__frame">
            <img
              className="contact-map__image"
              src={mapImage}
              alt="Map highlighting New Delhi"
            />
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="page-shell">
          <div className="contact-cta__panel">
            <h2 className="contact-cta__title">
              Start Your Investment Journey
              <br />
              Today
            </h2>
            <p className="contact-cta__text">
              Partner with advisors who understand your vision. Let&apos;s
              create a financial future that reflects your legacy.
            </p>
            <a className="contact-cta__button" href="#/contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

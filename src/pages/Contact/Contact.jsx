import './Contact.css'
import contactHero from '../../assets/images/contacthero.png'

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
    title: 'WhatsApp',
    value: '+91-8800442431',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20.5a8.4 8.4 0 0 1-4.1-1.1L4 20.5l1.1-3.8A8.5 8.5 0 1 1 12 20.5Z" />
        <path d="M8.8 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6a5.8 5.8 0 0 0 2.7 2.5l.7-.8c.2-.2.4-.3.7-.2l1.6.8c.3.1.4.3.4.6 0 .7-.5 1.8-1.7 1.8-2.8 0-7.4-3.9-7.4-6.6 0-.5.2-.8.4-1Z" />
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
]

function Contact() {
  const handleMessageSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fullName = formData.get('fullName')?.trim()
    const email = formData.get('email')?.trim()
    const phone = formData.get('phone')?.trim()
    const message = formData.get('message')?.trim()

    const whatsappMessage = [
      'New Contact Form Inquiry',
      '',
      `Full Name: ${fullName}`,
      `Email Address: ${email}`,
      `Phone Number: ${phone}`,
      `Message: ${message}`,
    ].join('\n')

    window.open(
      `https://wa.me/918800442431?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const handleContactCtaClick = (event) => {
    event.preventDefault()
    document
      .getElementById('send-message')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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

      <section id="send-message" className="contact-connect">
        <div className="page-shell contact-connect__grid">
          <div className="contact-connect__form-card">
            <h2 className="contact-connect__title">Send a Message</h2>

            <form className="contact-form" onSubmit={handleMessageSubmit}>
              <div className="contact-form__row">
                <label className="contact-form__field">
                  <span>Full Name</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    required
                  />
                </label>
                <label className="contact-form__field">
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </label>
              </div>

              <label className="contact-form__field">
                <span>Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  required
                />
              </label>

              <label className="contact-form__field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell us about your investment goals..."
                  required
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
          </div>
        </div>
      </section>

      <section id="contact-map" className="contact-map">
        <div className="page-shell">
          <div className="contact-map__frame">
            <iframe
              className="contact-map__embed"
              title="Delhi location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.1174%2C28.5355%2C77.3002%2C28.6841&layer=mapnik&marker=28.6139%2C77.2090"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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
            <a
              className="contact-cta__button"
              href="#/contact"
              onClick={handleContactCtaClick}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

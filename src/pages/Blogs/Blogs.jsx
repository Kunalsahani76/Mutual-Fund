import blogCardOne from '../../assets/images/B1.png'
import blogCardTwo from '../../assets/images/B2.png'
import blogCardThree from '../../assets/images/B3.png'
import blogCardFour from '../../assets/images/B4.png'
import blogCardFive from '../../assets/images/B5.png'
import blogCardSix from '../../assets/images/B6.png'
import blogsHero from '../../assets/images/blogshero.png'
import graphImage from '../../assets/images/graph.png'
import officeImage from '../../assets/images/office.png'
import './Blogs.css'

const blogPosts = [
  {
    title: 'How to Start Investing in Mutual Funds',
    description:
      'Learn the basics of mutual fund investments and how to begin your journey toward financial growth.',
    image: blogCardOne,
    alt: 'Mutual funds growth illustration',
  },
  {
    title: '5 Smart Ways to Grow Your Wealth',
    description:
      'Discover effective strategies to build and manage your wealth for long-term financial success.',
    image: blogCardTwo,
    alt: 'Wealth growth tree illustration',
  },
  {
    title: 'Why Insurance is Important for Your Future',
    description:
      "Understand how insurance protects your finances and secures your family's future.",
    image: blogCardThree,
    alt: 'Insurance protection illustration',
  },
  {
    title: 'Investment Planning for Beginners',
    description:
      'A simple guide to help you plan your investments and achieve your financial goals.',
    image: blogCardFour,
    alt: 'Investment planning for beginners illustration',
    tag: 'Beginners',
  },
  {
    title: 'Top Financial Mistakes to Avoid',
    description:
      'Avoid common financial mistakes that can impact your savings and investment growth.',
    image: blogCardFive,
    alt: 'Common financial mistakes illustration',
  },
  {
    title: 'How Inflation Affects Your Savings',
    description:
      'Learn how rising inflation impacts your money and how to stay ahead with smart investments.',
    image: blogCardSix,
    alt: 'Inflation effects on savings illustration',
  },
]

const popularTopics = [
  'Mutual Fund Investment',
  'Retirement Planning',
  'Wealth Creation',
  'Tax Saving Hacks',
  'Stock Market Analysis',
  'Crypto Asset Regulation',
  'Global Real Estate',
  'Fixed Income Assets',
]

function Blogs() {
  return (
    <>
      <section
        className="blogs-hero"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 15, 37, 0.92) 0%, rgba(4, 18, 43, 0.72) 42%, rgba(5, 22, 52, 0.24) 100%), url(${blogsHero})` }}
      >
        <div className="page-shell blogs-hero__inner">
          <div className="blogs-hero__content">
            <h1 className="blogs-hero__title">Our Insights & Financial Blogs</h1>
            <p className="blogs-hero__copy">
              Stay informed with expert tips, market trends and smart
              investment strategies to grow your wealth.
            </p>
          </div>

          <div className="blogs-hero__visual">
            <div className="blogs-hero__frame">
              <img src={graphImage} alt="Financial market growth chart" />
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-feature-section" aria-labelledby="blogs-feature-title">
        <div className="page-shell">
          <article className="blogs-feature">
            <div className="blogs-feature__media">
              <img src={officeImage} alt="Modern office overlooking a city skyline" />
            </div>
            <div className="blogs-feature__content">
              <p className="blogs-feature__eyebrow">Featured Strategy</p>
              <h2 id="blogs-feature-title" className="blogs-feature__title">
                The Ultimate Guide to Smart Investing in 2026
              </h2>
              <p className="blogs-feature__copy">
                Discover the key shifts in global markets and how to position
                your portfolio for sustainable growth amidst changing economic
                indicators.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="blogs-grid-section">
        <div className="page-shell">
          <div className="blogs-grid">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className="blog-card__media">
                  {post.tag ? <span className="blog-card__tag">{post.tag}</span> : null}
                  <img src={post.image} alt={post.alt} />
                </div>
                <div className="blog-card__body">
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__text">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blogs-topics-section" aria-labelledby="blogs-topics-title">
        <div className="page-shell">
          <h2 id="blogs-topics-title" className="blogs-topics__title">
            Popular Topics
          </h2>
          <div className="blogs-topics__list" aria-label="Popular blog topics">
            {popularTopics.map((topic) => (
              <span className="blogs-topics__pill" key={topic}>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="blogs-cta-section">
        <div className="page-shell">
          <div className="blogs-cta">
            <h2 className="blogs-cta__title">Start Your Investment Journey Today</h2>
            <p className="blogs-cta__copy">
              Speak with our specialist advisors to build a roadmap tailored to
              your specific financial goals.
            </p>
            <a className="blogs-cta__button" href="#/contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs

import { useState } from 'react'
import Button from '../../components/Button/Button'
import hniIcon from '../../assets/icons/HNI Services.png'
import insuranceIcon from '../../assets/icons/Insurance.png'
import mutualFundIcon from '../../assets/icons/Mutual Fund.png'
import nriIcon from '../../assets/icons/NRI Services.png'
import hniImage from '../../assets/images/hni.png'
import insuranceImage from '../../assets/images/insurance.png'
import kidsEducationImage from '../../assets/images/kidseducation.png'
import kidsMarriageImage from '../../assets/images/kidsmarriage.png'
import mutualFundImage from '../../assets/images/mutualfund.png'
import nriImage from '../../assets/images/nri.png'
import retirementImage from '../../assets/images/retirement.png'
import serviceHero from '../../assets/images/servicehero.png'
import vacationImage from '../../assets/images/vacation.png'
import wealthCalculatorImage from '../../assets/images/wealthcalculator.png'
import wealthCreationImage from '../../assets/images/wealthcreation.png'
import './Services.css'

const services = [
  {
    title: 'Mutual Fund',
    description: 'Diversified portfolios managed by industry experts.',
    image: mutualFundImage,
    icon: mutualFundIcon,
  },
  {
    title: 'Insurance',
    description: 'Comprehensive protection for what matters most.',
    image: insuranceImage,
    icon: insuranceIcon,
  },
  {
    title: 'NRI',
    description: 'Global wealth solutions for non-residents.',
    image: nriImage,
    icon: nriIcon,
  },
  {
    title: 'HNI',
    description: 'Exclusive strategies for ultra-high net worth.',
    image: hniImage,
    icon: hniIcon,
  },
]

const intelligenceRows = [
  {
    riskLabel: 'Low',
    investorType: 'Conservative',
    persona:
      "Investor's top priority is the safety of capital. She/he is willing to accept relatively low returns against a low risk of principal.",
    tone: 'low',
  },
  {
    riskLabel: 'Moderately Low',
    investorType: 'Moderately Conservative',
    persona:
      'An investor is willing to accept a small level of risk in exchange for some potential returns over a medium to long-term.',
    tone: 'moderately-low',
  },
  {
    riskLabel: 'Moderate',
    investorType: 'Moderate',
    persona:
      'An investor can tolerate a moderate level of risk in exchange for relatively higher potential returns over a medium to long-term.',
    tone: 'moderate',
  },
  {
    riskLabel: 'Moderately High',
    investorType: 'Moderately Aggressive',
    persona:
      'Investor is keen to accept a relatively higher risk to maximize potential returns over the medium to long-term.',
    tone: 'moderately-high',
  },
  {
    riskLabel: 'High Risk',
    investorType: 'Aggressive',
    persona:
      'Investor is willing to accept a significant risk to maximize potential returns over the long terms and is aware that she/he may lose a significant part of the capital.',
    tone: 'high',
  },
  {
    riskLabel: 'Very High Risk',
    investorType: 'Very Aggressive',
    persona:
      'Investor is willing to accept a significant high risk to maximize potential returns over the long terms and is aware that she/he may lose a significant part of the capital.',
    tone: 'very-high',
  },
]

const planningCards = [
  {
    title: 'Retirement',
    description: 'Plan for a life of leisure.',
    image: retirementImage,
    icon: 'retirement',
  },
  {
    title: 'Wealth Creation',
    description: 'Compound your capital over time.',
    image: wealthCreationImage,
    icon: 'growth',
  },
  {
    title: 'Kids Marriage',
    description: "Celebrate life's milestones.",
    image: kidsMarriageImage,
    icon: 'heart',
  },
  {
    title: 'Kids Education',
    description: 'Secure their academic future.',
    image: kidsEducationImage,
    icon: 'education',
  },
  {
    title: 'Vacation',
    description: 'Explore the world debt-free.',
    image: vacationImage,
    icon: 'travel',
  },
  {
    title: 'Wealth Calculator',
    description: 'Simulate your future returns.',
    image: wealthCalculatorImage,
    icon: 'calculator',
  },
]

const calculatorScenarios = [
  {
    id: 'education',
    label: 'Education',
    icon: 'education',
    breadcrumb: 'Kids Education Fund Calculator',
    title: 'Calculate For Kids Education Fund',
    description:
      "Make an estimate for your child's higher education with a live fund estimator tuned for long-term mutual fund planning.",
    labels: {
      age: 'What is the age of your child?',
      years: 'How many years can you save for this dream?',
      cost: 'What is the current estimate of this dream?',
      returns: 'Assumed annual mutual fund return',
      inflation: 'Assumed annual inflation',
    },
    defaults: {
      age: 10,
      years: 10,
      cost: 1200000,
      returns: 12,
      inflation: 6,
    },
  },
  {
    id: 'marriage',
    label: 'Marriage',
    icon: 'heart',
    breadcrumb: 'Kids Marriage Fund Calculator',
    title: 'Plan For Kids Marriage Corpus',
    description:
      "Project the future wedding budget and estimate the monthly SIP required to work toward it with disciplined investing.",
    labels: {
      age: 'What is the age of your child?',
      years: 'How many years can you save for this dream?',
      cost: 'What is the current estimate of this dream?',
      returns: 'Assumed annual mutual fund return',
      inflation: 'Assumed annual inflation',
    },
    defaults: {
      age: 8,
      years: 16,
      cost: 1800000,
      returns: 11,
      inflation: 5.5,
    },
  },
  {
    id: 'retirement',
    label: 'Retirement',
    icon: 'retirement',
    breadcrumb: 'Retirement Corpus Calculator',
    title: 'Model Your Retirement Corpus',
    description:
      'Estimate how much your retirement lifestyle may cost in the future and what level of monthly investing may help you reach it.',
    labels: {
      age: 'What is your current age?',
      years: 'How many years remain until retirement?',
      cost: 'What is your current annual expense target?',
      returns: 'Assumed annual mutual fund return',
      inflation: 'Assumed annual inflation',
    },
    defaults: {
      age: 32,
      years: 25,
      cost: 1200000,
      returns: 10,
      inflation: 5,
    },
  },
  {
    id: 'wealth',
    label: 'Wealth',
    icon: 'calculator',
    breadcrumb: 'Wealth Growth Calculator',
    title: 'Project Long-Term Wealth Creation',
    description:
      'Set a present-day wealth goal, adjust the assumptions, and see the corpus projection update instantly for your chosen horizon.',
    labels: {
      age: 'What is your current age?',
      years: 'How many years can you stay invested?',
      cost: 'What is your target corpus in today’s value?',
      returns: 'Assumed annual mutual fund return',
      inflation: 'Assumed annual inflation',
    },
    defaults: {
      age: 30,
      years: 15,
      cost: 5000000,
      returns: 11,
      inflation: 4.5,
    },
  },
]

const marketSources = [
  {
    title: 'AMFI NAV cycle',
    value: 'NAVs are published daily after markets close.',
    href: 'https://www.amfiindia.com/investor/knowledge-center-info?zoneName=NetAssetValueNAV',
  },
  {
    title: 'MoSPI CPI, February 2026',
    value: 'India CPI inflation was 3.21% YoY on 12 March 2026.',
    href: 'https://www.mospi.gov.in/uploads/latestReleases/latest_release_1773310539387_714ce3b5-4644-4aef-b2e3-64433640a9c3_Press_Release_of_CPI_February_2026.pdf',
  },
  {
    title: 'RBI baseline outlook',
    value: 'RBI projected 4.3% average inflation for 2026-27.',
    href: 'https://www.rbi.org.in/scripts/BS_ViewBulletin.aspx/scripts/BS_ViewBulletin.aspx?Id=23321',
  },
]

const indianCurrencyFormatter = new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0,
})

function formatCurrency(value) {
  return `Rs ${indianCurrencyFormatter.format(Math.max(0, Math.round(value)))}`
}

function formatYears(value) {
  return `${value} Year${value === 1 ? '' : 's'}`
}

function formatPercent(value) {
  return `${value}% p.a`
}

function calculateGoalProjection(inputs) {
  const years = Math.max(inputs.years, 1)
  const nominalReturn = inputs.returns / 100
  const inflation = inputs.inflation / 100
  const inflatedCost = inputs.cost * (1 + inflation) ** years
  const monthlyRate = nominalReturn / 12
  const months = years * 12
  const sipFactor =
    monthlyRate === 0 ? months : ((1 + monthlyRate) ** months - 1) / monthlyRate
  const monthlySip = sipFactor > 0 ? inflatedCost / sipFactor : inflatedCost / months
  const lumpsumToday = inflatedCost / (1 + nominalReturn) ** years
  const realReturn = ((1 + nominalReturn) / (1 + inflation) - 1) * 100

  return {
    inflatedCost,
    monthlySip,
    lumpsumToday,
    realReturn,
  }
}

function PlanningCardIcon({ type }) {
  if (type === 'growth') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 16.5 10 11.5l3.2 3.2L19 9" />
        <path d="M14.5 9H19v4.5" />
      </svg>
    )
  }

  if (type === 'heart') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20s-6.5-4.2-8.2-8.2C2.5 8.9 4.4 6 7.6 6c2 0 3.2 1.1 4.4 2.8C13.2 7.1 14.4 6 16.4 6c3.2 0 5.1 2.9 3.8 5.8C18.5 15.8 12 20 12 20Z" />
      </svg>
    )
  }

  if (type === 'education') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3.5 8 8.5-4 8.5 4-8.5 4-8.5-4Z" />
        <path d="M7 10.2v4.3c0 .9 2.2 2.5 5 2.5s5-1.6 5-2.5v-4.3" />
        <path d="M20.5 8v5" />
      </svg>
    )
  }

  if (type === 'travel') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 15.5h17" />
        <path d="m8.2 12.2 5.7 1.7 5.2-5.3-1.9-.6-4 2-4.3-4.6-1.7.5 2.2 5.1-3.5 1.2-2.1-1.7-1.1.4 1.5 2.9-1.3.4.6 1.1 2-.7" />
      </svg>
    )
  }

  if (type === 'calculator') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="4.5" width="15" height="15" rx="2" />
        <path d="M8 8.2h8" />
        <path d="M8 12h2.2" />
        <path d="M13.8 12H16" />
        <path d="M8 15.8h2.2" />
        <path d="M13.8 15.8H16" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 18c2.5 0 4-1.5 4-4V8.5C8 6 9.4 4 12 4s4 2 4 4.5V14c0 2.5 1.5 4 4 4" />
      <path d="M10 18h4" />
      <path d="M10.5 7.5h3" />
    </svg>
  )
}

function CalculatorTabIcon({ type }) {
  return <PlanningCardIcon type={type} />
}

function Services() {
  const [activeScenarioId, setActiveScenarioId] = useState(calculatorScenarios[0].id)
  const [calculatorValues, setCalculatorValues] = useState(
    Object.fromEntries(
      calculatorScenarios.map((scenario) => [
        scenario.id,
        { ...scenario.defaults },
      ]),
    ),
  )

  const activeScenario =
    calculatorScenarios.find((scenario) => scenario.id === activeScenarioId) ??
    calculatorScenarios[0]
  const activeValues = calculatorValues[activeScenario.id]
  const projection = calculateGoalProjection(activeValues)
  const comparisonBars = [
    {
      label: 'Today',
      value: activeValues.cost,
    },
    {
      label: 'Inflation',
      value: activeValues.cost * (1 + activeValues.inflation / 100),
    },
    {
      label: 'Lumpsum',
      value: projection.lumpsumToday,
    },
    {
      label: 'Target',
      value: projection.inflatedCost,
      accent: true,
    },
  ]
  const maxBarValue = Math.max(...comparisonBars.map((bar) => bar.value), 1)

  function updateScenarioValue(field, value) {
    setCalculatorValues((current) => ({
      ...current,
      [activeScenario.id]: {
        ...current[activeScenario.id],
        [field]: value,
      },
    }))
  }

  return (
    <>
      <section
        className="services-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(2, 15, 34, 0.96) 0%, rgba(3, 18, 40, 0.86) 34%, rgba(4, 22, 49, 0.4) 64%, rgba(4, 22, 49, 0.18) 100%), url(${serviceHero})`,
        }}
      >
        <div className="page-shell services-hero__inner">
          <div className="services-hero__content">
            <h1 className="services-hero__title">
              Our Financial
              <br />
              Services
            </h1>
            <p className="services-hero__text">
              Precision wealth management tailored for your legacy. We blend
              institutional expertise with bespoke care to protect and grow your
              capital.
            </p>
            <div className="services-hero__actions">
              <Button href="#/contact">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="services-showcase" aria-label="Financial service categories">
        <div className="page-shell services-showcase__grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <img
                className="service-card__image"
                src={service.image}
                alt={`${service.title} service illustration`}
              />
              <div className="service-card__icon">
                <img src={service.icon} alt="" aria-hidden="true" />
              </div>
              <h2 className="service-card__title">{service.title}</h2>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-intelligence" aria-labelledby="services-intelligence-title">
        <div className="page-shell">
          <div className="services-intelligence__header">
            <h2 id="services-intelligence-title" className="services-intelligence__title">
              Mutual Fund Intelligence
            </h2>
            <p className="services-intelligence__description">
              We analyze over 2,500 data points to curate a selection of funds that
              match your specific risk appetite and horizon.
            </p>
          </div>

          <div className="services-intelligence__table" role="table" aria-label="Risk profile mapping">
            <div className="services-intelligence__row services-intelligence__row--head" role="row">
              <div className="services-intelligence__cell" role="columnheader">
                Schemes With Riskometer Label
              </div>
              <div className="services-intelligence__cell" role="columnheader">
                Suitable Investor Type
              </div>
              <div className="services-intelligence__cell" role="columnheader">
                Investor Persona
              </div>
            </div>

            {intelligenceRows.map((row) => (
              <div className="services-intelligence__row" role="row" key={row.riskLabel}>
                <div className="services-intelligence__cell" role="cell">
                  <span className={`services-intelligence__risk services-intelligence__risk--${row.tone}`}>
                    {row.riskLabel}
                  </span>
                </div>
                <div className="services-intelligence__cell" role="cell">
                  {row.investorType}
                </div>
                <div className="services-intelligence__cell" role="cell">
                  {row.persona}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-planning" aria-label="Financial planning goals">
        <div className="page-shell services-planning__grid">
          {planningCards.map((card) => (
            <article className="planning-card" key={card.title}>
              <img className="planning-card__image" src={card.image} alt={`${card.title} illustration`} />
              <div className="planning-card__icon">
                <PlanningCardIcon type={card.icon} />
              </div>
              <h2 className="planning-card__title">{card.title}</h2>
              <p className="planning-card__description">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-calculator" aria-labelledby="services-calculator-title">
        <div className="page-shell">
          <div className="services-calculator__tabs" role="tablist" aria-label="Goal calculators">
            {calculatorScenarios.map((scenario) => (
              <button
                key={scenario.id}
                type="button"
                role="tab"
                aria-selected={activeScenario.id === scenario.id}
                className={`services-calculator__tab${
                  activeScenario.id === scenario.id ? ' services-calculator__tab--active' : ''
                }`}
                onClick={() => setActiveScenarioId(scenario.id)}
              >
                <span className="services-calculator__tab-icon">
                  <CalculatorTabIcon type={scenario.icon} />
                </span>
                <span>{scenario.label}</span>
              </button>
            ))}
          </div>

          <p className="services-calculator__crumbs">
            Home <span>/</span> Financial Calculators <span>/</span>{' '}
            <strong>{activeScenario.breadcrumb}</strong>
          </p>

          <div className="services-calculator__intro">
            <div>
              <h2 id="services-calculator-title" className="services-calculator__title">
                {activeScenario.title}
              </h2>
              <p className="services-calculator__text">{activeScenario.description}</p>
            </div>
            <div className="services-calculator__sources" aria-label="Market source references">
              {marketSources.map((source) => (
                <a
                  key={source.title}
                  className="services-calculator__source"
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{source.title}</span>
                  <strong>{source.value}</strong>
                </a>
              ))}
            </div>
          </div>

          <div className="services-calculator__panel">
            <div className="services-calculator__controls">
              <label className="calculator-field">
                <span className="calculator-field__header">
                  <span>{activeScenario.labels.age}</span>
                  <strong>{formatYears(activeValues.age)}</strong>
                </span>
                <input
                  type="range"
                  min="1"
                  max="60"
                  step="1"
                  value={activeValues.age}
                  onChange={(event) => updateScenarioValue('age', Number(event.target.value))}
                />
              </label>

              <label className="calculator-field">
                <span className="calculator-field__header">
                  <span>{activeScenario.labels.years}</span>
                  <strong>{formatYears(activeValues.years)}</strong>
                </span>
                <input
                  type="range"
                  min="1"
                  max="35"
                  step="1"
                  value={activeValues.years}
                  onChange={(event) => updateScenarioValue('years', Number(event.target.value))}
                />
              </label>

              <label className="calculator-field">
                <span className="calculator-field__header">
                  <span>{activeScenario.labels.cost}</span>
                  <strong>{formatCurrency(activeValues.cost)}</strong>
                </span>
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="50000"
                  value={activeValues.cost}
                  onChange={(event) => updateScenarioValue('cost', Number(event.target.value))}
                />
              </label>

              <label className="calculator-field">
                <span className="calculator-field__header">
                  <span>{activeScenario.labels.returns}</span>
                  <strong>{formatPercent(activeValues.returns)}</strong>
                </span>
                <input
                  type="range"
                  min="1"
                  max="18"
                  step="0.5"
                  value={activeValues.returns}
                  onChange={(event) =>
                    updateScenarioValue('returns', Number(event.target.value))
                  }
                />
              </label>

              <label className="calculator-field">
                <span className="calculator-field__header">
                  <span>{activeScenario.labels.inflation}</span>
                  <strong>{formatPercent(activeValues.inflation)}</strong>
                </span>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="0.5"
                  value={activeValues.inflation}
                  onChange={(event) =>
                    updateScenarioValue('inflation', Number(event.target.value))
                  }
                />
              </label>

              <div className="services-calculator__actions">
                <button
                  type="button"
                  className="services-calculator__button services-calculator__button--ghost"
                  onClick={() =>
                    setCalculatorValues((current) => ({
                      ...current,
                      [activeScenario.id]: { ...activeScenario.defaults },
                    }))
                  }
                >
                  Reset
                </button>
                <a className="services-calculator__button services-calculator__button--primary" href="#/contact">
                  Proceed
                </a>
              </div>
            </div>

            <aside className="services-calculator__projection">
              <p className="services-calculator__projection-label">Live Projection</p>
              <h3 className="services-calculator__projection-value">
                {formatCurrency(projection.inflatedCost)}
              </h3>
              <p className="services-calculator__projection-caption">
                Target wealth goal after {formatYears(activeValues.years).toLowerCase()}
              </p>

              <div className="services-calculator__stats">
                <div className="services-calculator__stat">
                  <span>Monthly SIP needed</span>
                  <strong>{formatCurrency(projection.monthlySip)}</strong>
                </div>
                <div className="services-calculator__stat">
                  <span>One-time amount today</span>
                  <strong>{formatCurrency(projection.lumpsumToday)}</strong>
                </div>
                <div className="services-calculator__stat">
                  <span>Estimated real return</span>
                  <strong>{projection.realReturn.toFixed(1)}%</strong>
                </div>
              </div>

              <div className="services-calculator__bars" aria-hidden="true">
                {comparisonBars.map((bar) => (
                  <div key={bar.label} className="services-calculator__bar-group">
                    <span
                      className={`services-calculator__bar${
                        bar.accent ? ' services-calculator__bar--accent' : ''
                      }`}
                      style={{
                        height: `${Math.max(34, (bar.value / maxBarValue) * 124)}px`,
                      }}
                    />
                    <small>{bar.label}</small>
                  </div>
                ))}
              </div>

              <p className="services-calculator__disclaimer">
                Live estimates are driven by your selected assumptions. Mutual fund NAVs are
                published daily by AMFI, but returns are not guaranteed and future values can vary.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services

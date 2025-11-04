import React, { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Sales Director, TechStart Inc.",
    company: "TechStart Inc.",
    content: "We were drowning in spreadsheets and losing 40% of our leads to follow-up delays. Befogfang automated our entire lead qualification process in just 5 days. Our response time dropped from 24 hours to 15 minutes.",
    result: "75% faster lead qualification",
    metric: "40% increase in conversion rate",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Operations Manager, GrowthLabs",
    company: "GrowthLabs",
    content: "As a non-technical team, we were skeptical about automation. Befogfang made it incredibly simple. They handled everything, trained our team, and now our sales processes run on autopilot. Best investment we've made.",
    result: "15 hours saved per week",
    metric: "Zero technical knowledge required",
    avatar: "MR"
  },
  {
    id: 3,
    name: "Jennifer Liu",
    title: "CEO, ServicePro Solutions",
    company: "ServicePro Solutions",
    content: "Our team was spending 20+ hours weekly on manual data entry and follow-up tasks. Befogfang identified our bottlenecks and built custom automations that eliminated 80% of manual work. Our team can now focus on what matters.",
    result: "80% reduction in manual work",
    metric: "3x ROI in first month",
    avatar: "JL"
  }
]

const caseStudies = [
  {
    company: "ServicePro Solutions",
    industry: "Professional Services",
    logo: "SP",
    result: "75% Faster Lead Response",
    description: "From 24-hour response time to 6-minute automated follow-up",
    improvement: "3x increase in qualified demos booked"
  },
  {
    company: "TechStart Inc.",
    industry: "SaaS",
    logo: "TS",
    result: "40% Increase in Conversion Rate",
    description: "Eliminated manual data entry errors and follow-up delays",
    improvement: "50+ hours saved monthly for sales team"
  }
]

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-white section-padding">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Don't Take Our Word For It
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real results from companies that transformed their sales processes
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="card border-l-4 border-l-primary-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary-600 font-bold">{study.logo}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{study.company}</h4>
                      <p className="text-sm text-gray-500">{study.industry}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">{study.result}</div>
                  <p className="text-sm text-gray-600">{study.description}</p>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="flex items-center text-green-700">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{study.improvement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].title}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[activeTestimonial].content}"
            </blockquote>

            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {testimonials[activeTestimonial].result}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[activeTestimonial].metric}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="trust-badge">Salesforce Partner</div>
            <div className="trust-badge">HubSpot Certified</div>
            <div className="trust-badge">Zapier Expert</div>
            <div className="trust-badge">Google Cloud</div>
          </div>
        </div>
      </div>
    </section>
  )
}
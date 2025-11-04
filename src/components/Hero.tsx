import React from 'react'
import { Form } from './Form'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[90vh] py-12 lg:py-20">
          {/* Left Column - Headline and Copy */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              50+ Companies Automated
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              Stop Losing Leads to
              <span className="block text-primary-600">Manual Chaos</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
              We build your <span className="font-semibold">automated sales engine</span> so your team focuses only on closing deals.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Zero Coding Required</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">14-Day Quick Start</span>
              </div>
            </div>

            {/* Partner/Integration Logos */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4 text-center lg:text-left">Integrates seamlessly with</p>
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                <div className="trust-badge">Salesforce</div>
                <div className="trust-badge">HubSpot</div>
                <div className="trust-badge">Zapier</div>
                <div className="trust-badge">Slack</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="order-1 lg:order-2">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}
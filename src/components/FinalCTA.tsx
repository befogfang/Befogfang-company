import React from 'react'
import Form from './Form'

export default function FinalCTA() {
  return (
    <section className="bg-primary-600 section-padding" id="contact-form">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Paying for Complexity
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 leading-relaxed mb-8">
            Start investing in clarity and reliable growth.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <p className="text-white text-lg">
              <span className="font-semibold">No commitment.</span> Just a clear roadmap for your business delivered in 48 hours.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">14 Days</div>
            <p className="text-primary-200">Average implementation time</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">3x ROI</div>
            <p className="text-primary-200">Typical return within first month</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">0%</div>
            <p className="text-primary-200">Technical knowledge required</p>
          </div>
        </div>

        {/* Final Form */}
        <div className="max-w-lg mx-auto">
          <Form
            title="Book Your Free Strategy Audit"
            subtitle="Get your custom automation roadmap in 48 hours. No strings attached."
            submitText="Get My Free Roadmap"
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-200">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Custom roadmap</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No obligation</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 pt-8 border-t border-primary-500">
          <p className="text-primary-200 mb-4">Have questions? We're here to help.</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="tel:+1-555-0123"
              className="text-white hover:text-primary-200 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (555) 0123
            </a>
            <a
              href="mailto:hello@befogfang.com"
              className="text-white hover:text-primary-200 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@befogfang.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
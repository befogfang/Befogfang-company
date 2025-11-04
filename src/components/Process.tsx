import React from 'react'

const processSteps = [
  {
    number: "1",
    title: "Discover",
    subtitle: "We map your broken processes",
    description: "We dive deep into your current workflows to identify bottlenecks, manual tasks, and missed opportunities. No technical jargon—just clear insights about where you're losing time and money.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    duration: "2-3 days",
    deliverable: "Process Audit Report"
  },
  {
    number: "2",
    title: "Automate",
    subtitle: "We build your connected system",
    description: "We implement simple, reliable automation that connects your existing tools. Your team gets a unified system that works seamlessly without requiring technical expertise.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    duration: "5-7 days",
    deliverable: "Working Automation System"
  },
  {
    number: "3",
    title: "Scale",
    subtitle: "We manage your predictable results",
    description: "We monitor, optimize, and maintain your automation so you get consistent performance and continued improvement. Your team focuses on growth while we handle the technical details.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    duration: "Ongoing",
    deliverable: "Monthly Performance Reports"
  }
]

export default function Process() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Simple Solution: The Befogfang Way
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We handle all the complexity so you don't have to.
            No technical expertise required from your team.
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between relative">
              {/* Connection Line */}
              <div className="absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200"></div>

              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center w-1/3 relative">
                  {/* Step Number */}
                  <div className="w-24 h-24 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg relative z-10">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-primary-600 font-medium mb-4">{step.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <div className="text-primary-600">
                        {step.icon}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Duration:</span> {step.duration}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Deliverable:</span> {step.deliverable}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number with Line */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="flex-1 h-0.5 bg-primary-300 ml-4"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="ml-20">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-primary-600 font-medium mb-3">{step.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>

                  {/* Icon and Metadata */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <div className="text-primary-600">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">
                        <span className="font-medium">Duration:</span> {step.duration}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Deliverable:</span> {step.deliverable}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Sales Process?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your free strategy audit and get a clear roadmap for automation in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="btn-primary text-center">
                Schedule Free Audit
              </a>
              <a href="#testimonials" className="btn-secondary text-center">
                See Results
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
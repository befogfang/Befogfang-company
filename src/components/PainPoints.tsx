import React from 'react'

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Data Entry Errors",
    description: "Manual data entry wastes 10+ hours per week and costs you 23% of every deal due to mistakes and delays.",
    metric: "10+ hours wasted weekly"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cold Leads",
    description: "79% of leads go cold before your team can follow up because manual processes create response delays.",
    metric: "79% of leads lost to delays"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v1a1 1 0 001 1h4a1 1 0 001-1v-1m3-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v8m5-4h4" />
      </svg>
    ),
    title: "Spreadsheet Chaos",
    description: "Your team juggles 15+ disconnected spreadsheets, creating version control nightmares and data inconsistencies.",
    metric: "15+ disconnected systems"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Process Bottlenecks",
    description: "Critical tasks get stuck waiting for approvals, creating delays that frustrate customers and cost deals.",
    metric: "3-5 day approval delays"
  }
]

export default function PainPoints() {
  return (
    <section className="bg-white section-padding">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            If Your Non-Technical Team is Facing This, You Need Automation
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Manual processes aren't just inefficient—they're silently killing your revenue growth
            and frustrating your best team members.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="card group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <div className="text-red-600">
                    {point.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {point.description}
                  </p>
                  <div className="text-sm font-medium text-red-600 bg-red-50 inline-block px-3 py-1 rounded-full">
                    {point.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 italic">
            "Every hour spent on manual tasks is an hour not spent building relationships with customers."
          </p>
        </div>
      </div>
    </section>
  )
}
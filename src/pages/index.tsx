import React from 'react'
import Head from 'next/head'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <>
      <Head>
        <title>Befogfang - Stop Losing Leads to Manual Chaos: Automated Sales Engine</title>
        <meta name="description" content="Stop losing leads to manual chaos. We build automated sales engines for non-technical teams. Book your free strategy audit and get a custom automation roadmap in 48 hours." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://befogfang.com/" />
        <meta property="og:title" content="Stop Losing Leads to Manual Chaos: We Build Your Automated Sales Engine" />
        <meta property="og:description" content="Befogfang designs, integrates, and manages simple automation flows so your team focuses only on closing sales." />
        <meta property="og:image" content="https://befogfang.com/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://befogfang.com/" />
        <meta property="twitter:title" content="Stop Losing Leads to Manual Chaos: We Build Your Automated Sales Engine" />
        <meta property="twitter:description" content="Befogfang designs, integrates, and manages simple automation flows so your team focuses only on closing sales." />
        <meta property="twitter:image" content="https://befogfang.com/images/og-image.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://befogfang.com/" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Befogfang",
              "description": "We build automated sales engines for non-technical teams",
              "url": "https://befogfang.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/befogfang",
                "https://linkedin.com/company/befogfang"
              ]
            })
          }}
        />
      </Head>

      <main>
        <Hero />
        <PainPoints />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>

      {/* Analytics Tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Google Analytics 4 - Replace with your actual GA4 measurement ID
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');

            // Form submission tracking
            document.addEventListener('DOMContentLoaded', function() {
              const forms = document.querySelectorAll('form');
              forms.forEach(form => {
                form.addEventListener('submit', function() {
                  gtag('event', 'form_submit', {
                    event_category: 'lead_generation',
                    event_label: 'contact_form'
                  });
                });
              });
            });

            // Scroll tracking for engagement
            let scrollTracked = false;
            window.addEventListener('scroll', function() {
              if (!scrollTracked && window.scrollY > window.innerHeight * 0.5) {
                scrollTracked = true;
                gtag('event', 'scroll_50_percent', {
                  event_category: 'engagement',
                  event_label: 'landing_page'
                });
              }
            });
          `
        }}
      />

      {/* Google Analytics Script */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
    </>
  )
}
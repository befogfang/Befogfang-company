import React, { useState, useEffect } from 'react'
import { ContactFormData, validateForm, FormErrors } from '@/lib/validation'
import { submitToGoogleSheets, submitLeadLocally } from '@/lib/google-sheets'

interface FormProps {
  title?: string
  subtitle?: string
  submitText?: string
  onSuccess?: () => void
  className?: string
}

export default function Form({
  title = "Book Your Free Strategy Audit",
  subtitle = "No commitment. Just a clear roadmap for your business.",
  submitText = "Book My Free Call",
  onSuccess,
  className = ""
}: FormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Real-time validation
  useEffect(() => {
    if (Object.keys(formData).some(key => formData[key as keyof ContactFormData])) {
      const newErrors = validateForm(formData)
      setErrors(newErrors)
    }
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    const newErrors = validateForm(formData)
    setErrors(newErrors)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors = validateForm(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Try Google Sheets first, fallback to local storage
      const result = await submitToGoogleSheets(formData)

      if (!result.success && process.env.NODE_ENV === 'development') {
        // Fallback to local storage in development
        const localResult = await submitLeadLocally(formData)
        if (localResult.success) {
          setIsSubmitted(true)
          onSuccess?.()
        } else {
          setSubmitError(localResult.message)
        }
      } else if (result.success) {
        setIsSubmitted(true)
        onSuccess?.()
      } else {
        setSubmitError(result.message)
      }
    } catch (error) {
      setSubmitError('Something went wrong. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = Object.keys(validateForm(formData)).length === 0

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you for your request!</h3>
        <p className="text-gray-600 mb-4">We'll contact you within 24 hours to schedule your free strategy audit.</p>
        <p className="text-sm text-gray-500">Check your email for confirmation details.</p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="John Smith"
            className={`form-input ${errors.name ? 'border-red-300 focus:ring-red-500' : ''}`}
            disabled={isSubmitting}
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="john@example.com"
            className={`form-input ${errors.email ? 'border-red-300 focus:ring-red-500' : ''}`}
            disabled={isSubmitting}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="+1 (555) 123-4567"
            className={`form-input ${errors.phone ? 'border-red-300 focus:ring-red-500' : ''}`}
            disabled={isSubmitting}
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Acme Inc."
            className="form-input"
            disabled={isSubmitting}
          />
          {errors.company && <p className="form-error">{errors.company}</p>}
        </div>

        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 text-sm">{submitError}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            submitText
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  )
}
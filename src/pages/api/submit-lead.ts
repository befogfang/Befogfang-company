import { NextApiRequest, NextApiResponse } from 'next'
import { ContactFormData, validateForm } from '@/lib/validation'
import { submitToGoogleSheets, submitLeadLocally } from '@/lib/google-sheets'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  try {
    const data = req.body as ContactFormData

    // Validate the form data
    const errors = validateForm(data)
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      })
    }

    // Try to submit to Google Sheets first
    const sheetsResult = await submitToGoogleSheets(data)

    if (sheetsResult.success) {
      return res.status(200).json({
        success: true,
        message: 'Lead submitted successfully'
      })
    }

    // Fallback to local storage if Google Sheets fails
    if (process.env.NODE_ENV === 'development') {
      const localResult = await submitLeadLocally(data)
      if (localResult.success) {
        return res.status(200).json({
          success: true,
          message: 'Lead saved locally (development mode)'
        })
      }
    }

    // If all methods fail
    return res.status(500).json({
      success: false,
      message: sheetsResult.message || 'Failed to submit lead'
    })

  } catch (error) {
    console.error('API submission error:', error)
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}
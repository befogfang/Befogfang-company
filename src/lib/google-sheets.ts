import { ContactFormData } from './validation'

export interface GoogleSheetsResponse {
  success: boolean
  message: string
  data?: any
}

export interface LeadData extends ContactFormData {
  timestamp: string
  source: string
  userAgent?: string
}

// Google Apps Script Web App URL (replace with your actual URL)
const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || ''

export const submitToGoogleSheets = async (data: ContactFormData): Promise<GoogleSheetsResponse> => {
  try {
    if (!GOOGLE_SHEETS_URL) {
      throw new Error('Google Sheets URL not configured')
    }

    const leadData: LeadData = {
      ...data,
      timestamp: new Date().toISOString(),
      source: 'landing-page',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
    }

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    return {
      success: true,
      message: 'Lead submitted successfully',
      data: result,
    }
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error)

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit lead',
    }
  }
}

// Fallback function for local development/testing
export const submitLeadLocally = async (data: ContactFormData): Promise<GoogleSheetsResponse> => {
  try {
    console.log('Lead submitted locally:', data)

    // Store in localStorage for testing
    if (typeof window !== 'undefined') {
      const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]')
      const newLead = {
        ...data,
        timestamp: new Date().toISOString(),
        source: 'landing-page',
      }
      existingLeads.push(newLead)
      localStorage.setItem('leads', JSON.stringify(existingLeads))
    }

    return {
      success: true,
      message: 'Lead saved locally (development mode)',
    }
  } catch (error) {
    console.error('Error saving lead locally:', error)

    return {
      success: false,
      message: 'Failed to save lead locally',
    }
  }
}
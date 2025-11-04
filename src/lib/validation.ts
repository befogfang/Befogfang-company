import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[+]?[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
  company: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

export interface FormErrors {
  [key: string]: string | undefined
}

export const validateForm = (data: Partial<ContactFormData>): FormErrors => {
  const result = ContactFormSchema.safeParse(data)

  if (!result.success) {
    const errors: FormErrors = {}
    result.error.issues.forEach((issue) => {
      if (issue.path.length > 0) {
        errors[issue.path[0]] = issue.message
      }
    })
    return errors
  }

  return {}
}

export const hasFormErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0
}

export const getFormFieldError = (errors: FormErrors, field: string): string | undefined => {
  return errors[field]
}
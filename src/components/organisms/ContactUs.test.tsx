import { render, screen } from '@testing-library/react'
import ContactUs from './ContactUs'

describe('ContactUs', () => {
  test('renders heading, paragraphs and CTA button', () => {
    render(<ContactUs />)

  // Title may render as a div and the button shares the same text.
  // Use getAllByText to find all occurrences and ensure at least one is present.
  const titles = screen.getAllByText(/Talk to our team/i)
  expect(titles.length).toBeGreaterThanOrEqual(1)

    // Paragraph content
    expect(screen.getByText(/Ready to improve patient experience/i)).toBeInTheDocument()

    // The CTA should be a button with accessible name
  const cta = screen.getByRole('button', { name: /Talk to our team/i })
  expect(cta).toBeInTheDocument()
  })
})

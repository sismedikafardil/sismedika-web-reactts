import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import AdminUpload from '../AdminUpload'

beforeEach(() => {
  // ensure tests run isolated without persisted auth state
  localStorage.clear()
})

describe('AdminUpload', () => {
  test('shows password form and reveals protected content on correct password', async () => {
    render(<AdminUpload />)

    // Form elements present
    const input = screen.getByPlaceholderText(/enter admin password/i)
    const button = screen.getByRole('button', { name: /submit/i })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    // Enter credentials
    const username = screen.getByPlaceholderText(/enter admin username/i)
    fireEvent.change(username, { target: { value: 'admin' } })
    fireEvent.change(input, { target: { value: 'adminsim12' } })
    fireEvent.click(button)

    // Protected content appears
    const protectedHeading = await screen.findByText(/Admin Upload/i)
    expect(protectedHeading).toBeInTheDocument()
  })

  test('shows alert on incorrect password', () => {
    render(<AdminUpload />)

    const username = screen.getByPlaceholderText(/enter admin username/i)
    const input = screen.getByPlaceholderText(/enter admin password/i)
    const button = screen.getByRole('button', { name: /submit/i })

    // provide username but wrong password
    fireEvent.change(username, { target: { value: 'admin' } })
    fireEvent.change(input, { target: { value: 'wrongpass' } })
    fireEvent.click(button)

    // error message should be shown in the UI
    expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument()
  })
})

describe('AdminUpload login', () => {
  beforeEach(() => {
    // reset storage
    localStorage.clear()
  })

  it('logs in with correct credentials and shows upload UI', async () => {
    render(<AdminUpload />)

    // login form visible
    expect(screen.getByText(/Admin Upload/i)).toBeInTheDocument()
    const user = screen.getByLabelText(/Username/i)
    const pass = screen.getByLabelText(/Password/i)
    const submit = screen.getByRole('button', { name: /submit/i })

    fireEvent.change(user, { target: { value: 'admin' } })
    fireEvent.change(pass, { target: { value: 'adminsim12' } })
    fireEvent.click(submit)

    // after login, logout button appears
    expect(await screen.findByRole('button', { name: /logout/i })).toBeInTheDocument()
    expect(localStorage.getItem('adminUploadAuth')).toBe('1')
  })
})

import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AdminUpload from '../AdminUpload'
import axios from 'axios'
import { vi } from 'vitest'

vi.mock('axios')

const mockedAxios = axios as unknown as {
  post: unknown
  put: unknown
}

describe('AdminUpload integration', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.resetAllMocks()
  })

  it('uploads a file using presigned URL and shows public URL', async () => {
    // mock presign response
    const presignResp = { data: { upload_url: 'https://s3.example.com/upload', public_url: 'https://cdn.example.com/uploads/photo.png' } }
    mockedAxios.post = vi.fn().mockResolvedValue(presignResp)
    mockedAxios.put = vi.fn().mockResolvedValue({ status: 200 })

    render(<AdminUpload />)

    // login
    fireEvent.change(screen.getByPlaceholderText(/enter admin username/i), { target: { value: 'admin' } })
    fireEvent.change(screen.getByPlaceholderText(/enter admin password/i), { target: { value: 'adminsim12' } })
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    // trigger file selection programmatically
  const file = new File(['filecontent'], 'photo.png', { type: 'image/png' })

  // wait for the hidden input element to be present, then simulate a file selection
  await waitFor(() => expect(document.getElementById('admin-upload-input')).toBeInTheDocument())
  const hiddenInput = document.getElementById('admin-upload-input') as HTMLInputElement

  // simulate file selection by defining files and firing change
  Object.defineProperty(hiddenInput, 'files', { value: [file] })
  fireEvent.change(hiddenInput)

    // click submit to start uploads
    fireEvent.click(screen.getByRole('button', { name: /submit upload/i }))

    // wait for public URL to appear
    const link = await screen.findByText(/cdn.example.com\/uploads\/photo.png/i)
    expect(link).toBeInTheDocument()
  })
})

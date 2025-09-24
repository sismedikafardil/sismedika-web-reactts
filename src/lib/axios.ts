import axios from 'axios'
import type { AxiosProgressEvent } from 'axios'

// Centralized backend base (explicit per request)
const API_BASE = 'http://127.0.0.1:8000'

export async function uploadFile(file: File, onUploadProgress?: (evt: AxiosProgressEvent) => void) {
  const formData = new FormData()
  formData.append('file', file)

  const resp = await axios.post(`${API_BASE}/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress,
  })

  return resp.data
}

export default axios
// helper exports complete

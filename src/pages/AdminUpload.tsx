import React, { useEffect, useState, useRef } from 'react'
import { uploadFile } from '../lib/axios'
import Button from '../components/atoms/Button'

const STORAGE_KEY = 'adminUploadAuth'
const USERNAME = 'admin'
const PASSWORD = 'adminsim12'

export default function AdminUpload() {
  const [authed, setAuthed] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState<string | null>(null)

  type UploadItem = {
    id: string
    file: File
    name: string
    progress: number
    publicUrl?: string
    error?: string
  }

  const [items, setItems] = useState<UploadItem[]>([])
  const [uploading, setUploading] = useState(false)
  const [allSuccess, setAllSuccess] = useState(false)
  const [sessionRefreshed, setSessionRefreshed] = useState(false)
  const browseRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    try {
      setAuthed(localStorage.getItem(STORAGE_KEY) === '1')
    } catch {
      // ignore storage read errors (e.g., disabled storage)
    }
  }, [])

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (user.trim() === USERNAME && pass === PASSWORD) {
      try { localStorage.setItem(STORAGE_KEY, '1') } catch {
        // ignore storage write errors
      }
      setAuthed(true)
      setError(null)
    } else {
      setError('Invalid credentials')
    }
  }

  const onLogout = () => {
    try { localStorage.removeItem(STORAGE_KEY) } catch {
      // ignore storage remove errors
    }
    setAuthed(false)
    setUser('')
    setPass('')
    setError(null)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    if (!files.length) return
    // Filter to images only as requested
    const images = files.filter((f) => f.type.startsWith('image/'))
    const mapped: UploadItem[] = images.map((f) => ({
      id: crypto.randomUUID(),
      file: f,
      name: f.name,
      progress: 0,
    }))
    setItems(mapped)
    setAllSuccess(false)
    setSessionRefreshed(false)
  }

  const onSubmitUploads = async () => {
    if (!items.length || uploading) return
    setUploading(true)
    setAllSuccess(false)
    setSessionRefreshed(false)

    const next = [...items]
    let hadError = false

    for (let i = 0; i < next.length; i++) {
      const it = next[i]
        try {
        // Upload via centralized helper
        const data = await uploadFile(it.file, (evt) => {
          const loaded = (evt?.loaded ?? 0) as number
          const total = (evt?.total ?? 0) as number
          if (!total) return
          const pct = Math.round((loaded * 100) / total)
          setItems((curr) => curr.map((c) => (c.id === it.id ? { ...c, progress: pct } : c)))
        })

        const { public_url } = (data || {}) as { public_url?: string }

        next[i] = { ...it, progress: 100, publicUrl: public_url }
        setItems([...next])
      } catch (err: unknown) {
        console.error(err)
        const message = err instanceof Error ? err.message : 'Upload failed'
        hadError = true
        next[i] = { ...it, error: message }
        setItems([...next])
      }
    }

    setUploading(false)
    if (!hadError) {
      setAllSuccess(true)
      // refresh session metadata
      try {
        localStorage.setItem(STORAGE_KEY, '1')
        localStorage.setItem(`${STORAGE_KEY}:last`, String(Date.now()))
      } catch {
        // ignore storage errors
      }
      setAuthed(true)
      setSessionRefreshed(true)
      // clear input value to allow re-selecting same files in future
      if (browseRef.current) {
        try { browseRef.current.value = '' } catch {
          // ignore reset errors
        }
      }
      // Reset UI after a short delay so user sees success then starts fresh
      setTimeout(() => {
        setItems([])
        setAllSuccess(false)
        setSessionRefreshed(false)
      }, 1500)
    }
  }

  if (!authed) {
    return (
      <section className="w-full py-12">
        <div className="mx-auto w-full max-w-md px-6">
          <h1 className="text-2xl font-bold mb-6">Admin Upload</h1>
          <form onSubmit={onLogin} className="space-y-4 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div>
                <label htmlFor="admin-username" className="block text-sm font-medium text-slate-700 mb-1">Username</label>
                <input
                  id="admin-username"
                  placeholder="enter admin username"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>
              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input
                  id="admin-password"
                  placeholder="enter admin password"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="mt-2">
              <Button type="submit">Submit</Button>
            </div>
          </form>
          <p className="text-xs text-slate-500 mt-3">Hint: user “admin”, password “adminsim12”.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Admin Upload</h1>
          <Button variant="ghost" onClick={onLogout}>Logout</Button>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <p className="text-slate-700 mb-4">Upload your assets/files below.</p>
          <div className="flex flex-wrap items-center gap-3">
            <input
              ref={browseRef}
              id="admin-upload-input"
              type="file"
              accept="image/*"
              onChange={onChange}
              multiple
              className="hidden"
            />
            {/* Use a label bound to the input for reliable, accessible triggering */}
            <label
              htmlFor="admin-upload-input"
              className="inline-flex items-center gap-3 px-5 py-3 bg-[#29AB9A] hover:bg-[#238d85] text-white rounded-md font-medium shadow-sm transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b57e6]"
              role="button"
              aria-label="Browse files"
            >
              Browse files
            </label>
            <div className="text-sm text-slate-700">
              {items.length ? `${items.length} file${items.length > 1 ? 's' : ''} selected` : 'No file selected'}
            </div>
          </div>

          {/* Files list with progress */}
          {items.length > 0 && (
            <div className="mt-5 space-y-3">
              {items.map((it) => (
                <div key={it.id} className="border border-slate-200 rounded-md p-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="font-medium text-slate-800 truncate mr-3" title={it.name}>{it.name}</div>
                    <div className="text-slate-600">
                      {it.error ? <span className="text-red-600">Error</span> : it.publicUrl ? 'Uploaded' : `${it.progress}%`}
                    </div>
                  </div>
                  <div className="mt-2 h-2 w-full bg-slate-100 rounded">
                    <div className={`h-2 rounded ${it.error ? 'bg-red-400' : 'bg-emerald-500'}`} style={{ width: `${Math.min(it.progress, 100)}%` }} />
                  </div>
                  {it.publicUrl && (
                    <div className="mt-2 text-xs">
                      <a href={it.publicUrl} target="_blank" rel="noreferrer" className="text-emerald-700 underline">{it.publicUrl}</a>
                    </div>
                  )}
                  {it.error && (
                    <div className="mt-2 text-xs text-red-600">{it.error}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Success / session refresh indicator */}
          {allSuccess && (
            <div className="mt-4 text-sm text-emerald-700">
              ✓ Successfully uploaded {items.length} file{items.length > 1 ? 's' : ''}.
              {sessionRefreshed && <span className="ml-2">Session refreshed.</span>}
            </div>
          )}
        </div>
        {/* Footer area with submit button (outside the white card) */}
        <div className="mt-4 flex items-center justify-end">
          <Button onClick={onSubmitUploads} disabled={!items.length || uploading}>
            {uploading ? 'Submitting…' : 'Submit upload'}
          </Button>
        </div>
      </div>
    </section>
  )
}

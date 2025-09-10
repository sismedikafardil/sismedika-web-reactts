export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 flex flex-col">
      {/* page content should use a centered container when needed */}
      {children}
    </div>
  )
}

import Header from '../molecules/Header'
import Footer from '../molecules/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-200 mt-12 mt-auto" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold">S</div>
          <div>
            <div className="font-semibold">Sismedika</div>
            <div className="text-sm text-slate-400">Empowering healthcare with digital tools</div>
          </div>
        </div>

        <nav className="mt-4 md:mt-0">
          <ul className="flex gap-6 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Product</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>

  <div className="mt-4 md:mt-0 text-sm text-slate-400">© {new Date().getFullYear()} Sismedika. All rights reserved.</div>
      </div>
    </footer>
  )
}

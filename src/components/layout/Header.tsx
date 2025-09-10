// import { Link } from 'react-router-dom'
// import HeaderBtm from '../molecules/HeaderBtm'

// export default function Header() {
//   return (
//     <>
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Link to="/" className="flex items-center gap-3">
//             <img src="/src/assets/sismedika-logo.png" alt="Sismedika" className="h-8" />
//           </Link>
//         </div>

//         <nav className="hidden md:flex items-center gap-6">
//           <Link to="/products" className="text-sm font-medium text-slate-700 hover:text-slate-900">
//             Our Products
//           </Link>
//           <Link to="/services" className="text-sm font-medium text-slate-700 hover:text-slate-900">
//             Our Services
//           </Link>
//           <Link to="/stories" className="text-sm font-medium text-slate-700 hover:text-slate-900">
//             Customer Stories
//           </Link>
//           <Link to="/resources" className="text-sm font-medium text-slate-700 hover:text-slate-900">
//             Resources
//           </Link>
//         </nav>

//         <div className="flex items-center gap-4">
//           <Link
//             to="/contact"
//             className="hidden md:inline-block bg-[#29AB9A] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#238d85]"
//           >
//             Contact Us
//           </Link>

//           <button className="md:hidden p-2 rounded-md bg-slate-100">
//             <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
      
//         </div>
//       </header>
//       {/* header bottom strip rendered as sibling to ensure precise positioning */}
//       <HeaderBtm />
//     </>
//   )
// }

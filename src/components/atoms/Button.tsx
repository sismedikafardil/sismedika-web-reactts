export default function Button({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const base = 'px-4 py-2 bg-[#29AB9A] hover:bg-[#238d85] text-white rounded cursor-pointer'
  return (
    <button className={`${base} ${className}`.trim()}>{children}</button>
  )
}

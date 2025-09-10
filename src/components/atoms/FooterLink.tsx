export default function FooterLink({ href = '#', children, className = '' }: { href?: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`hover:text-white ${className}`}>
      {children}
    </a>
  )
}

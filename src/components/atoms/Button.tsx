export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-[#29AB9A] hover:bg-[#238d85] text-white rounded">{children}</button>
  )
}

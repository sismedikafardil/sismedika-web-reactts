import Paragraph from '../components/atoms/Paragraph'

export default function NotFound() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">404 - Not Found</h1>
  <Paragraph variant="normal" className="mt-4 text-gray-600">The page you requested could not be found.</Paragraph>
    </main>
  )
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
  <div className="min-h-screen bg-gray-950 px-6 py-12 text-white">
  <div className="mx-auto max-w-4xl">
    <h1 className="text-4xl font-extrabold tracking-tight text-amber-400 sm:text-5xl">
      Welcome to QC Baked Goods</h1>
    <h2 className="mt-3 text-2xl font-medium text-gray-300">
      Financial Statements
    </h2>
  </div>
</div>

  )
}

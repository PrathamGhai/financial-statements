import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (

  <div className="min-h-screen bg-gray-950 px-6 py-12 text-white">
  <div className="mx-auto max-w-4xl border-b border-slate-800 pb-6 mb-8">
    <h1 className="text-5xl font-extrabold tracking-tight text-red-500 sm:text-5xl"> Welcome to Kissena Baked Goods</h1>
    <h2 className="mt-3 text-2xl font-medium text-amber-300">Financial Statements</h2>
  </div>
  <p className="mx-20 text-lg text-green-200">We are a new company. Year 2025 is our first full year of operations.
   On this site, we will disclose the fianancial statements for our investors.</p>






</div>

)
}

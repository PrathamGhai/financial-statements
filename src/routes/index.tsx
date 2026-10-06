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
   <div className='bg-yellow-900 m-10'>
    <button
  className="m-5 rounded-lg border border-amber-500/50 bg-slate-900 px-6 py-3 font-semibold text-amber-400 shadow-lg shadow-black/20 
  transition-all duration-1000 hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950 hover:shadow-amber-500/20 active:scale-95"
>
  Click Here
</button>


      
      <button>Click Here</button><button>Click Here</button><button>Click Here</button></div>
</div> )
}

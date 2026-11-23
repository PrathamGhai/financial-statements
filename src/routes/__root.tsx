import { HeadContent, Link, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Kissena Baked Goods',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header className="border-b border-edge">
  <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap gap-6 items-center justify-between">
    <Link to="/" className="font-display text-xl">Kissena Baked Goods</Link>
    <nav className="flex flex-wrap gap-6" aria-label="Site menu">
  <Link to="/" className="text-ink-soft hover:text-ink"
    activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
    activeOptions={{ exact: true }}>Home</Link>
  <Link to="/disclosures"
  className="text-ink-soft hover:text-ink"
  activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
  activeOptions={{ exact: true }}>Disclosures</Link>
</nav>
  </div>
</header>
        <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

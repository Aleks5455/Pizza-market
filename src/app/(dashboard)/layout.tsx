export const metadata = {
  title: 'Pizza Dashboard!',
  description: 'So tasty anyway',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

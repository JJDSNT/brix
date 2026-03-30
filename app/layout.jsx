import './globals.css'

export const metadata = {
  title: 'Brix Comunicação',
  description: 'Agência de eventos',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  )
}

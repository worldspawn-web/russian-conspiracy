import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.className} bg-black min-h-screen antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

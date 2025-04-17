import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Providers } from './providers';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'ReacUI - React Component Library',
  description: 'A modern React UI library with customizable components, built with Tailwind CSS and React 18',
  keywords: ['react', 'components', 'ui', 'library', 'tailwind', 'css'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
} 
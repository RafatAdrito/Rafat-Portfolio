import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-indigo-500 to-blue-500 text-white`}
      >
        <div className="2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] very-sm:w-[320px] m-auto px-12 h-screen flex flex-col justify-between overflow-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
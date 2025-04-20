import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@components/Header';
import Footer from '@components/Footer';
import './globals.css';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'CostaCodeCraft – By Joaquim Costa',
  description: 'Costa Code Craft - Notes from a Software Engineer in the Cloud',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='flex min-h-screen flex-col'>
          <Header className='w-full pb-4' />
          <div className='flex flex-1 flex-col sm:flex-row md:mx-auto'>
            {children}
          </div>
          <Footer className='w-full justify-center p-4' />
        </div>
      </body>
    </html>
  );
}

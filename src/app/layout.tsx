import Header from '@components/Header';
import Footer from '@components/Footer';
import { justSans } from '@/styles/fonts';
import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Joaquim Costa | Cloud-Native Engineer & Java and Kotlin Backend Specialist',
  description:
    'Joaquim Costa is a Senior Software Engineer focused on building scalable cloud-native systems using Java, Kotlin, Spring Boot, and Azure. Explore tutorials, architecture patterns, and real-world microservices design.',
  keywords: [
    'Joaquim Costa',
    'Cloud Native Engineer',
    'Spring Boot',
    'Kotlin Backend',
    'Java Backend',
    'Microservices Architecture',
    'Azure DevOps',
    'CI/CD',
    'Kubernetes',
  ],
  authors: [{ name: 'Joaquim Costa', url: 'https://costacodecraft.com' }],
  creator: 'Joaquim Costa',
  openGraph: {
    title:
      'Joaquim Costa | Cloud-Native Engineer & Java and Kotlin Backend Specialist',
    description:
      'Scalable backend systems. DevOps automation. Real-world tutorials and architecture insights from Joaquim Costa.',
    url: 'https://costacodecraft.com',
    siteName: 'Costa Code Craft',
    images: [
      {
        url: 'https://costacodecraft.com/og-banner.png', // optional: customize if you have a banner
        width: 1200,
        height: 630,
        alt: 'Costa Code Craft Open Graph Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://costacodecraft.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${justSans.className} antialiased`}>
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

import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';
import { Lato } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={lato.className} suppressHydrationWarning>
      <body className='overflow-hidden'>
        <NextTopLoader showSpinner={false} />
        <Providers session={null}>
          {' '}
          {/* Pass null if session is not needed */}
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}

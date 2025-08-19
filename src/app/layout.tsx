import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import '../styles/globals.scss';

import { UserProvider } from '@/context/UserProvider';
import NextTopLoader from 'nextjs-toploader';

const vazirmatn = Vazirmatn({
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
  variable: '--font-vazirmatn',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Auth me',
  description: 'مینی اپلیکیشن احراز هویت کاربر',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className}`}>
        <NextTopLoader color="#4a6dff" />
        <UserProvider>
          {/* <Header /> */}
          <div className="container">{children}</div>
        </UserProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CATME App',
  description: 'Web3 Games for everyone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SideBar />
        <div className="main">
          <TopBar />
          <main>{children} </main>
        </div>
      </body>
    </html>
  );
}

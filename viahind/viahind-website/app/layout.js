import './globals.css';
import TopBar from '@/components/TopBar';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Viahind - IT Solutions & Digital Transformation',
  description: 'Premium IT solutions for building a smart world. Web development, mobile apps, enterprise solutions, and digital transformation services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <TopBar />
        <main className="pb-20">{children}</main>
        <Footer />
        <Navigation />
      </body>
    </html>
  );
}

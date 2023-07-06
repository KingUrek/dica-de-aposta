export const revalidate = 10
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

export const metadata = {
  title: 'Dica de Aposta',
  description: 'Generated by Next.js',
};

import { AvenirNext, Tittilium } from '../styles/fonts';
import '../styles/index.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${AvenirNext.variable} ${Tittilium.variable} font-sans`}
    >
      <body>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

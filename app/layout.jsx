import { Afacad_Flux } from 'next/font/google'
import "./globals.css";
import { Topbar } from '@/components/Topbar';
import { Toaster } from "@/components/ui/toaster"
import { BusinessNameContext } from '@/context/BusinessNameContext';

const Afacad = Afacad_Flux({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap'
})


export const metadata = {
  title: "AI Business Names",
  description: "Generate unique business names instantly and check domain availability with AI.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Afacad.className}`}
      >
        <BusinessNameContext>
          <Topbar />
          <Toaster />
          {children}
        </BusinessNameContext>
      </body>
    </html>
  );
}

import Footer from "@/../template/src/app/Components/Footer/Footer";
import Header from "@/../template/src/app/Components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import Providers from "./providers";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import Script from "next/script";
import Head from "./head";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--heading-font',
});
const dm_Sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--body-color-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Solution Doux Confort',
    template: '%s | Solution Doux Confort',
  },
  description: 'Solution Doux Confort se spécialise dans la climatisation, le chauffage et les thermopompes, offrant des solutions écoénergétiques et adaptées à vos besoins. Confort, fiabilité et expertise sont au cœur de nos services pour un intérieur agréable en toute saison. 4 saisons une solution, Doux Confort!',
  openGraph: {
    title: 'Solution Doux Confort',
    description: 'Solution Doux Confort se spécialise dans la climatisation, le chauffage et les thermopompes, offrant des solutions écoénergétiques et adaptées à vos besoins. Confort, fiabilité et expertise sont au cœur de nos services pour un intérieur agréable en toute saison. 4 saisons une solution, Doux Confort!',
    images: ['/logo-600x269.jpg'],
  },
  googleAnalytics: {
    id: 'G-GFWSQJZQ6J',
    enabled: true,
  },
  googleTagManager: {
    id: 'GT-WF4LHGD6',
    enabled: true,
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className="!scroll-smooth" lang="fr">
        <Head />
        <body className={`${outfit.variable} ${dm_Sans.variable}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </div>
        </Providers>
         <GoogleAnalytics gaId={metadata.googleAnalytics.id} />
         <GoogleTagManager gtmId={metadata.googleTagManager.id} />
      </body>
    </html>
  );
}

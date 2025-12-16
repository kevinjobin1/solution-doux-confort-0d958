// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
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
    default: 'Arkdin - Air Conditioning Services NextJS Template',
    template: '%s | Arkdin - Air Conditioning Services NextJS Template',
  },
  description: 'Arkdin - Air Conditioning Services NextJS Template',
  openGraph: {
    title: 'Arkdin - Air Conditioning Services NextJS Template',
    description: 'Arkdin - Air Conditioning Services NextJS Template',
    images: ['/openGraphImage.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="!scroll-smooth" lang="en">
       <head>
          <meta name="author" content="Themeservices" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={`${outfit.variable} ${dm_Sans.variable}`}>
        <Providers>
          <div className="isolate">
            <Header variant={'home1'} />
            {children}
            <Footer />
            <ScrollToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}

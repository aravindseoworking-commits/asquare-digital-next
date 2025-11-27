import "@/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'A Square Digital Marketing — SEO, PPC & Performance Marketing',
  description: 'A Square Digital Marketing — Result-driven SEO, PPC, Lead Generation & Performance Marketing for businesses.',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

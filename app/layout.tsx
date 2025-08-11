import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FloatingWhatsAppButton from '@/components/ui/FloatingWhatsAppButton';
import TimedPopup from '@/components/home/TimedPopup';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const inter = Inter({ subsets: ['latin'] });

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Comfort Home Healthcare | Home Nursing & Elder Care in Indore, Ujjain, Dewas, Rau, Mhow',
  description: 'Comfort Home Healthcare offers expert home nursing, elder care, physiotherapy, and more in Indore, Ujjain, Dewas, Rau, and Mhow. Contact us for compassionate care.',
  keywords: 'home healthcare Indore, home nursing services Ujjain, elder care services Dewas, patient care taker Rau, physiotherapy at home Mhow, healthcare services Indore, take care services Ujjain, elder take care Dewas, home health care Rau, nursing care paralysis patient Mhow, new born baby care Indore, Japa care Ujjain, post operative nursing Dewas, home health care services, professional nursing at home, senior care at home, baby care services, rehabilitation at home',
  robots: 'index, follow',
  openGraph: {
    title: 'Comfort Home Healthcare - Expert Care at Home',
    description: 'Trusted home healthcare services including home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.',
    url: 'https://comforthomehealthcare.in',
    type: 'website',
    images: ['https://comforthomehealthcare.in/images/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comfort Home Healthcare - Home Care Services',
    description: 'Providing professional home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.',
    images: ['https://comforthomehealthcare.in/images/hero.jpg'],
  },
  alternates: {
    canonical: 'https://comforthomehealthcare.in',
  },
};

// Schema.org structured data for LocalBusiness
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Comfort Home Healthcare',
  description: 'Providing home healthcare services including home nursing, elder care, physiotherapy, paralysis care, new born baby care, Japa care, and post-operative care in Indore, Ujjain, Dewas, Rau, and Mhow.',
  url: 'https://comforthomehealthcare.in',
  telephone: '+91-9479365137',
  email: 'comforthomehealthcaree@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'B-07, Flat No. 704, Palash Parisar, Silicon City',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    postalCode: '452012',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9479365137',
    contactType: 'Customer Service',
    areaServed: 'Indore, Ujjain, Dewas, Rau, Mhow',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className} aria-label="Comfort Home Healthcare website">
        <FloatingWhatsAppButton />
        <TimedPopup />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

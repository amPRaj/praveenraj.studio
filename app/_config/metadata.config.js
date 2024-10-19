/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://dennis-snellenberg-portfolio.vercel.app/'),
  title: {
    template: '%s | Dennis Snellenberg',
    default: 'Dennis Snellenberg • Freelance Designer & Developer',
  },
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Praveen Raj',
  generator: 'Dennis Snellenberg',
  applicationName: 'Dennis Snellenberg',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Develope', 'Freelance'],
  authors: [
    { name: 'Praveen Raj', url: 'https://praveenraj.dev' },
  ],
  
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

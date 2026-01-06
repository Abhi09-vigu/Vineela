import "./globals.css";

export const metadata = {
  title: "Kokkula Vineela - Legal Advocate",
  description: "Formal legal counsel and advocacy: contracts, disputes, compliance, and advisory services.",
  keywords: "advocate, lawyer, legal adviser, legal services, contracts, dispute resolution",
  openGraph: {
    title: "Kokkula Vineela - Legal Advocate",
    description: "Formal legal counsel and advocacy.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

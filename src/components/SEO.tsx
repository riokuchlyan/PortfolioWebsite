import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noindex?: boolean;
}

export default function SEO({
  title = "Rio Kuchlyan - Computer Science Student & Developer",
  description = "Rio Kuchlyan is a Computer Science student at UNC Chapel Hill specializing in technology and finance. Backend developer with experience in trading software, VR development, and financial modeling.",
  canonical = "https://www.riokuchlyan.com",
  ogImage = "/og-image.png",
  ogType = "website",
  structuredData,
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes('Rio Kuchlyan') ? title : `${title} | Rio Kuchlyan`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`https://www.riokuchlyan.com${ogImage}`} />
      <meta property="og:site_name" content="Rio Kuchlyan Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://www.riokuchlyan.com${ogImage}`} />
      
      {/* Additional meta tags */}
      <meta name="author" content="Rio Kuchlyan" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0a0a0a" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
} 
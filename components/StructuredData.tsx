const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Souvik Rana",
    "url": "https://souvik-rana.vercel.app",
    "sameAs": [
              "https://github.com/Souvik-Rana",
              "https://www.linkedin.com/in/souvik-rana-sr17/",
              "https://gravatar.com/souvikrana"
             ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;

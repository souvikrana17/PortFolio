const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "SOUVIK RANA",
    "url": "https://souvikrana17.vercel.app",
    "sameAs": [
      "https://github.com/souvikrana17",
      "https://www.linkedin.com/in/souvikrana17/",
      "https://www.instagram.com/souvikrana17/",
      "https://www.kaggle.com/souvikrana17",
      "https://gravatar.com/souvikrana17"
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

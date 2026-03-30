import React from 'react';

export default function About() {
  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) var(--spacing-sm)', maxWidth: '800px' }}>
      <h1 className="serif-heading" style={{ fontSize: '3.5rem', marginBottom: '2rem', textAlign: 'center' }}>Our Journal</h1>
      
      <img 
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" 
        alt="Fashion studio" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', marginBottom: '3rem' }} 
      />

      <div style={{ fontSize: '1.1rem', color: 'var(--color-stone)', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Welcome to Maison Boutique. Our vision started with a simple idea: to bring together a highly curated selection of exceptional garments that transcend seasonal trends. Every piece in our collection is carefully sourced for its meticulous craftsmanship, luxurious material, and timeless silhouette.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          We believe in "less, but better." A wardrobe shouldn't be overwhelmed by fast fashion, but anchored by beautiful, lasting designs that elevate your everyday aesthetic. From our tailoring to our minimalist accessories, each item tells a story.
        </p>
        <p>
          Thank you for exploring our world. We hope these pieces inspire your confidence as much as they inspired us to find them.
        </p>
      </div>
    </div>
  );
}

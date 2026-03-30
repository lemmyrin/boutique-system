import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  // Just show first 4 items as "Featured"
  const featured = products.slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section 
        style={{
          position: 'relative',
          height: '70vh',
          minHeight: '500px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div style={{
          position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)'
        }}></div>
        
        <div className="container" style={{
          position: 'relative', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'var(--color-white)'
        }}>
          <h1 className="serif-heading" style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '0.02em' }}>
            Elevate Your Everyday
          </h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2rem', opacity: 0.9 }}>
            Discover our latest collection of premium, ethically crafted pieces designed to seamlessly blend luxury into your daily life.
          </p>
          <Link to="/shop" className="btn-primary" style={{backgroundColor: '#fff', color: '#000'}}>
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-sm)' }}>
        <div style={{textAlign: 'center', marginBottom: 'var(--spacing-lg)'}}>
          <h2 className="serif-heading" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
            New Arrivals
          </h2>
          <div style={{width: '60px', height: '2px', backgroundColor: 'var(--color-charcoal)', margin: '0 auto'}}></div>
        </div>
        
        <div className="product-grid">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div style={{textAlign: 'center', marginTop: 'var(--spacing-md)'}}>
          <Link to="/shop" className="btn-outline">View All Products</Link>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Shop() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Womens', 'Mens', 'Accessories'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)' }}>
      <header style={{textAlign: 'center', marginBottom: 'var(--spacing-lg)'}}>
        <h1 className="serif-heading" style={{fontSize: '3rem', marginBottom: '1rem'}}>
          Catalog
        </h1>
        <p style={{color: 'var(--color-stone)', maxWidth: '500px', margin: '0 auto'}}>
          Explore our complete collection of meticulously curated garments and accessories.
        </p>

        {/* Filter Bar */}
        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          gap: 'var(--spacing-md)',
          marginTop: 'var(--spacing-md)',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="nav-link"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: filter === cat ? 'var(--color-charcoal)' : 'var(--color-stone)',
                textDecoration: filter === cat ? 'underline' : 'none',
                textUnderlineOffset: '4px',
                fontWeight: filter === cat ? 600 : 400
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grid */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <p style={{textAlign: 'center', gridColumn: '1 / -1', padding: '4rem'}}>
            No products found for this category.
          </p>
        )}
      </div>
    </div>
  );
}

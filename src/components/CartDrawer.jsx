import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    totalPrice 
  } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="drawer-overlay animate-fade-in" 
        onClick={() => setIsCartOpen(false)} 
      />
      <div className="drawer-content animate-slide-in">
        <div className="drawer-header">
          <h2 className="serif-heading" style={{fontSize: '1.25rem'}}>Your Bag</h2>
          <button className="btn-icon" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="drawer-body">
          {cartItems.length === 0 ? (
             <div style={{textAlign: 'center', marginTop: '3rem', color: 'var(--color-stone)'}}>
               Your cart is empty.
             </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.name}</h3>
                  <div className="cart-item-price">Ksh {item.price.toLocaleString()}</div>
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{fontSize: '0.9rem', width: '20px', textAlign: 'center'}}>
                      {item.quantity}
                    </span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus size={14} />
                    </button>
                    <button 
                      className="btn-icon" 
                      style={{marginLeft: 'auto', color: 'var(--color-danger)'}}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 600}}>
              <span>Subtotal</span>
              <span>Ksh {totalPrice.toLocaleString()}</span>
            </div>
            <button 
              className="btn-primary" 
              style={{width: '100%'}}
              onClick={() => {
                setIsCartOpen(false);
                navigate('/checkout');
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

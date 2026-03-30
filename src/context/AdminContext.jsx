import React, { createContext, useState, useContext } from 'react';
import { products as initialProducts } from '../data/products';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  // Initialize Inventory with a default random stock
  const [inventory, setInventory] = useState(
    initialProducts.map(p => ({ ...p, stock: Math.floor(Math.random() * 20) + 5 }))
  );
  
  // Mock recent real-time sales
  const [sales, setSales] = useState([
    { id: '1001', date: new Date(Date.now() - 86400000).toISOString(), items: [{ name: 'Oversized Linen Shirt', price: 19500, quantity: 1 }], total: 19500, customer: 'Alice Doe' }
  ]);
  
  // Mock customer CRM DB
  const [customers, setCustomers] = useState([
    { id: 'C1', name: 'Alice Doe', email: 'alice@example.com', totalSpent: 19500, orders: 1 },
    { id: 'C2', name: 'John Smith', email: 'john@example.com', totalSpent: 0, orders: 0 }
  ]);

  // Actions
  const addSale = (saleData) => {
    // 1. Record Sale
    const newSale = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      date: new Date().toISOString(),
      ...saleData
    };
    setSales(prev => [newSale, ...prev]);

    // 2. Deduct Inventory Stock
    setInventory(prev => prev.map(item => {
      const soldItem = saleData.items.find(i => i.id === item.id);
      if (soldItem) {
        return { ...item, stock: Math.max(0, item.stock - soldItem.quantity) };
      }
      return item;
    }));

    // 3. Update Customer CRM
    setCustomers(prev => {
      const existing = prev.find(c => c.name.toLowerCase() === saleData.customer.toLowerCase());
      if (existing) {
        return prev.map(c => c.id === existing.id ? { ...c, totalSpent: c.totalSpent + saleData.total, orders: c.orders + 1 } : c);
      } else {
        return [...prev, { id: 'C' + (prev.length + 1), name: saleData.customer, email: saleData.customerEmail || 'N/A', totalSpent: saleData.total, orders: 1 }];
      }
    });
  };

  const addProduct = (product) => {
    setInventory(prev => [...prev, { ...product, id: prev.length + 1 }]);
  };

  const updateProductStock = (id, newStock) => {
    setInventory(prev => prev.map(p => p.id === id ? { ...p, stock: newStock } : p));
  };

  return (
    <AdminContext.Provider value={{
      inventory,
      sales,
      customers,
      addSale,
      addProduct,
      updateProductStock
    }}>
      {children}
    </AdminContext.Provider>
  );
};

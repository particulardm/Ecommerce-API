export interface StoreItem {
    name: string;
    price: number;
    category: string;
  }
  
  export const storeItems: Map<number, StoreItem> = new Map([
    [1, {  name: 'Wireless Mouse', price: 29.99, category: 'Electronics' }],
    [2, {  name: 'Bluetooth Headphones', price: 49.99, category: 'Electronics' }],
    [3, {  name: 'USB-C Charger', price: 19.99, category: 'Electronics' }],
    [4, {  name: 'Water Bottle', price: 12.99, category: 'Accessories' }],
    [5, {  name: 'Notebook', price: 6.99, category: 'Stationery' }],
    [6, {  name: 'Ballpoint Pen', price: 2.49, category: 'Stationery' }],
    [7, {  name: 'Laptop Stand', price: 34.99, category: 'Accessories' }],
    [8, {  name: 'Desk Lamp', price: 22.99, category: 'Home' }],
    [9, {  name: 'Phone Case', price: 15.99, category: 'Accessories' }],
    [10, { name: 'Gaming Keyboard', price: 59.99, category: 'Electronics' }]
  ]);


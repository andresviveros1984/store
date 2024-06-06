import { create } from 'zustand';

// Creating a store using Zustand
export const useStore = create((set) => ({
  //------ CART MODAL STATE ------//
  // Initial state of the cart modal (closed by default)
  cartModalOpen: false,
  // Function to open the cart modal
  openCartModal: () => set(() => ({ cartModalOpen: true })),
  // Function to close the cart modal
  closeCartModal: () => set(() => ({ cartModalOpen: false })),
  // Function to toggle the state of the cart modal
  toggleCartModal: () =>
    set((state) => ({ cartModalOpen: !state.cartModalOpen })),

  //------ CART ITEMS STATE ------//
  // Initial state of cart items (empty array)
  cartItems: [],
  // Function to add items to the cart
  addToCart: (items) =>
    set((state) => ({
      cartItems: Array.isArray(items)
        ? [...state.cartItems, ...items] // If items is an array, spread its elements and add to cartItems
        : [...state.cartItems, items], // If items is a single item, add it directly to cartItems
    })),
  // Function to update the details of a specific cart item
  updateCartItem: (itemId, newDetails) =>
    set((state) => ({
      cartItems: state.cartItems.map(
        (item) => (item.id === itemId ? { ...item, ...newDetails } : item) // Update the item if the IDs match, otherwise keep it unchanged
      ),
    })),
  // Function to remove an item from the cart based on item ID
  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId), // Remove the item if the ID matches
    })),
  // Function to set the quantity of a specific cart item
  setCartItemCount: (itemId, count) =>
    set((state) => ({
      cartItems: state.cartItems.map(
        (item) => (item.id === itemId ? { ...item, quantity: count } : item) // Update the quantity if the IDs match, otherwise keep it unchanged
      ),
    })),
}));

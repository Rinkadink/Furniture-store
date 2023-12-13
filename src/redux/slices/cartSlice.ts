import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  description: string;
  gallery: string[];
  size: string[];
  colors: string[];
  SKU: string;
  category: string;
  tags: string[];
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const isWindowDefined = typeof window !== "undefined";

const loadCartFromStorage = (): CartItem[] => {
  try {
    if (isWindowDefined) {
      const serializedState = localStorage.getItem("cart");
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    }
    return [];
  } catch (err) {
    console.error("Error loading cart from local storage", err);
    return [];
  }
};

const saveCartToStorage = (cart: CartItem[]): void => {
  try {
    if (isWindowDefined) {
      const serializedState = JSON.stringify(cart);
      localStorage.setItem("cart", serializedState);
    }
  } catch (err) {
    console.error("Error saving cart to local storage", err);
  }
};

const initialState: CartState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // Increment quantity if the item already exists
        state.items[existingItemIndex].quantity += action.payload.quantity;
      } else {
        // Add a new item to the cart
        state.items.push({ ...action.payload });
      }
      saveCartToStorage(state.items);
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ productId: number; newQuantity: number }>
    ) => {
      const { productId, newQuantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === productId);

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = newQuantity;
        saveCartToStorage(state.items);
      }
    },
  },
});

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

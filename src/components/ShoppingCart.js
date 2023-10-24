import React, { useReducer } from "react";

const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the item is already in the cart
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        // If the item is already in the cart, update the quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item is not in the cart, add it
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const items = [
    { id: 1, name: "Product A", price: 10.99 },
    { id: 2, name: "Product B", price: 7.99 },
    { id: 3, name: "Product C", price: 14.99 },
  ];

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h3>Cart Items:</h3>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} (Quantity: {item.quantity})
            <button onClick={() => removeFromCart(item)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;

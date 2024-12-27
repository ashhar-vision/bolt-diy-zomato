import React from 'react'
import { useCart } from '../stores/cart'
import { restaurants } from '../data/restaurants'

export default function Cart() {
  const { items, removeItem, clearCart } = useCart()

  const total = items.reduce((sum, item) => sum + item.price, 0)

  console.log('Cart items:', items)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => {
              const restaurant = restaurants.find(r => r.id === item.restaurantId)
              return (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{restaurant?.name}</p>
                    <p className="font-semibold mt-1">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              )
            })}
          </div>

          <div className="mt-8 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
              >
                Clear Cart
              </button>
              <button
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

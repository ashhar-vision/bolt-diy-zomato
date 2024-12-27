import React from 'react'
import { useParams } from 'react-router-dom'
import { restaurants } from '../data/restaurants'
import { useCart } from '../stores/cart'

export default function Restaurant() {
  const { id } = useParams()
  const restaurant = restaurants.find(r => r.id === parseInt(id))
  const addItem = useCart(state => state.addItem)

  if (!restaurant) return <div>Restaurant not found</div>

  return (
    <div>
      <div className="mb-8">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{restaurant.name}</h1>
        <p className="text-gray-600">{restaurant.cuisine}</p>
        <div className="mt-2">
          <span className="text-yellow-500">★ {restaurant.rating}</span>
          <span className="text-gray-500 ml-4">{restaurant.deliveryTime}</span>
        </div>
      </div>

      <div className="grid gap-6">
        {restaurant.menu.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-semibold mt-2">${item.price}</p>
            </div>
            <button
              onClick={() => addItem({ ...item, restaurantId: restaurant.id })}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

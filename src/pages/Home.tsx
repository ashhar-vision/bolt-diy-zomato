import React from 'react'
import { Link } from 'react-router-dom'
import { restaurants } from '../data/restaurants'

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => (
        <Link
          key={restaurant.id}
          to={`/restaurant/${restaurant.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{restaurant.name}</h2>
            <p className="text-gray-600">{restaurant.cuisine}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-yellow-500">★ {restaurant.rating}</span>
              <span className="text-gray-500">{restaurant.deliveryTime}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

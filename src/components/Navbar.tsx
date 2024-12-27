import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useCart } from '../stores/cart'

interface NavbarProps {
  toggleTheme: () => void
  theme: 'light' | 'dark'
}

export default function Navbar({ toggleTheme, theme }: NavbarProps) {
  const cartItems = useCart(state => state.items)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-red-600 dark:text-red-400">
              FoodOrder
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {theme === 'light' ? <MoonIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" /> : <SunIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />}
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-bounce">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

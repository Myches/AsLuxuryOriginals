// OrdersReturns.tsx
import React from "react";
import { Link } from "react-router-dom";
import { TruckIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

const OrdersReturns = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side Menu */}
      <div className="w-1/4 bg-white p-6 shadow-lg">
        <nav className="space-y-2">
          <Link
            to="/account/membership"
            className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Membership plan
          </Link>
          <Link
            to="/orders"
            className="block px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold"
          >
            Orders and Returns
          </Link>
          <Link
            to="/credits"
            className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Credits and Refunds
          </Link>
          <Link
            to="/security"
            className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Details and Security
          </Link>
          <Link
            to="/"
            className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Home
          </Link>
        </nav>
      </div>

      {/* Right Side Content */}
      <div className="w-3/4 p-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Orders and Returns
          </h2>

          {/* Orders List */}
          <div className="space-y-4">
            {/* Order Item */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Order #12345
                    </h3>
                    <p className="text-sm text-gray-500">
                      Placed on Jan 15, 2024
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Delivered
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gray-200 rounded-md"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-900">
                      Product Name
                    </h4>
                    <p className="text-gray-500">Quantity: 1</p>
                    <p className="text-gray-500">$99.99</p>
                  </div>
                  <div>
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <ArrowPathIcon className="h-5 w-5 mr-2" />
                      Return Item
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <TruckIcon className="h-5 w-5" />
                  <span>Delivered on Jan 20, 2024</span>
                </div>
              </div>
            </div>

            {/* Add more order items here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersReturns;

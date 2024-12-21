// OrdersReturns.tsx
import { Link } from "react-router-dom";
import {
  TruckIcon,
  ArrowPathIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const OrdersReturns = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-semibold">Orders & Returns</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Side Navigation */}
        <div
          className={`
          fixed lg:static inset-y-0 left-0 transform 
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 transition duration-200 ease-in-out
          z-50 w-64 lg:w-1/4 bg-white shadow-lg
        `}
        >
          <nav className="p-6 space-y-2">
            <Link
              to="/account/membership"
              className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Membership Plan
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

        {/* Main Content */}
        <div className="flex-1 lg:w-3/4 pt-16 lg:pt-0">
          <div className="max-w-4xl mx-auto p-4 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Orders and Returns
            </h2>

            {/* Orders List */}
            <div className="space-y-4">
              {/* Order Item */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Order #12345
                      </h3>
                      <p className="text-sm text-gray-500">
                        Placed on Jan 15, 2024
                      </p>
                    </div>
                    <span className="mt-2 sm:mt-0 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Delivered
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
                    <div className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <ArrowPathIcon className="h-5 w-5 mr-2" />
                        Return Item
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 lg:px-6 py-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <TruckIcon className="h-5 w-5" />
                    <span>Delivered on Jan 20, 2024</span>
                  </div>
                </div>
              </div>

              {/* You can add more order items here */}
              {/* Example of another order with different status */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Order #12346
                      </h3>
                      <p className="text-sm text-gray-500">
                        Placed on Jan 22, 2024
                      </p>
                    </div>
                    <span className="mt-2 sm:mt-0 px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      In Transit
                    </span>
                  </div>

                  {/* Similar product content structure */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersReturns;

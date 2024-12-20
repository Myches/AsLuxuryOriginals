// CreditsRefunds.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CurrencyDollarIcon,
  CheckIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const CreditsRefunds = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-semibold">Credits & 111Refunds</h1>
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

        {/* Side Navigation - Mobile Drawer & Desktop Sidebar */}
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
              className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Orders and Returns
            </Link>
            <Link
              to="/credits"
              className="block px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold"
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6 lg:mb-8">
              Credits and Refunds
            </h2>

            {/* Credits Card */}
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6 mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Available Credits
                  </h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">
                    $50.00
                  </p>
                </div>
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                  Redeem Credits
                </button>
              </div>
            </div>

            {/* Refunds History */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Recent Refunds
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {/* Refund Item */}
                <div className="p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="font-medium text-gray-900">Order #12345</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Refund processed on Jan 10, 2024
                      </p>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
                      <p className="text-lg font-semibold text-gray-900">
                        $25.00
                      </p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckIcon className="h-4 w-4 mr-1" />
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
                {/* Add more refund items here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsRefunds;

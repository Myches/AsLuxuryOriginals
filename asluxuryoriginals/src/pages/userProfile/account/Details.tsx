// DetailsSecurity.tsx
import { Link } from "react-router-dom";
import {
  // UserIcon,
  KeyIcon,
  ShieldCheckIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const DetailsSecurity = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Mobile Header */}
      <div className="lg:hidden fixed mt-20 top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-semibold">Account Details</h1>
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

      <div className="flex flex-col lg:flex-row ">
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
          fixed  lg:static inset-y-0 left-0 transform 
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 transition duration-200 ease-in-out
          z-50 w-64 lg:w-1/4  bg-white shadow-lg
        `}
        >
          <nav className="p-6 space-y-2">
            {/* Same navigation links as other pages */}
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
              className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Credits and Refunds
            </Link>
            <Link
              to="/security"
              className="block px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold"
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
        <div className="flex-1 lg:w-3/4 mt-24 pt-16 lg:pt-0">
          <div className="max-w-4xl mx-auto p-4 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Account Details & Security
            </h2>

            {/* Personal Details Section */}
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Personal Details
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Security Settings
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                    <KeyIcon className="h-6 w-6 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Password</p>
                      <p className="text-sm text-gray-500">
                        Last changed 3 months ago
                      </p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                    Change Password
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                    <ShieldCheckIcon className="h-6 w-6 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Two-Factor Authentication
                      </p>
                      <p className="text-sm text-gray-500">Not enabled</p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSecurity;

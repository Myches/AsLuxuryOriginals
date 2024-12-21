// Membership.tsx

import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Membership = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-semibold">Membership Plan</h1>
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
            fixed h- lg:static inset-y-0 left-0 transform 
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 transition duration-200 ease-in-out
            z-50 w-64 lg:w-1/4 p-6 bg-white shadow-lg
          `}
        >
          <nav className="p-6 space-y-2">
            <Link
              to="/account/membership"
              className="block px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold"
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
              Current Membership
            </h2>

            {/* Membership Card */}
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6 mb-6">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Premium Plan
                  </h3>
                  <p className="text-gray-500">Valid until: Dec 31, 2024</p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6 mb-6">
              <div className="relative">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold text-gray-600">
                    Membership Progress
                  </span>
                  <span className="text-sm font-semibold text-blue-700">
                    75%
                  </span>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                  <div
                    style={{ width: "75%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
                  ></div>
                </div>
                <p className="text-sm text-gray-500">
                  75% of membership period completed
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Your Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Priority Support",
                  "Exclusive Discounts",
                  "Free Shipping",
                  "Early Access to Sales",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;

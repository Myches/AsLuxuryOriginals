// Membership.tsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Membership = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side Menu */}
      <div className="w-1/4 bg-white p-6 shadow-lg">
        <nav className="space-y-2">
          <Link
            to="/account/membership"
            className="block px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold"
          >
            Membership
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

      {/* Right Side Content */}
      <div className="w-3/4 p-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Current Membership
          </h2>

          {/* Membership Card */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
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
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Premium Plan
                </h3>
                <p className="text-gray-500">Valid until: Dec 31, 2024</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-sm font-semibold text-gray-600">
                    Membership Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-blue-700">
                    75%
                  </span>
                </div>
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
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Your Benefits
            </h3>
            <div className="space-y-4">
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
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;

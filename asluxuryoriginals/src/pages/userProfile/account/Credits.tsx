// CreditsRefunds.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  CurrencyDollarIcon,
  ArrowPathIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../../../components/Navbar";

const CreditsRefunds = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Navbar /> */}

      {/* Left Side Menu */}
      <div className="w-1/4 bg-white p-6 shadow-lg">
        <nav className="space-y-2">
          <Link
            to="/account/membership"
            className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
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

      {/* Right Side Content */}
      <div className="w-3/4 p-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Credits and Refunds
          </h2>

          {/* Credits Card */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Available Credits
                </h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">$50.00</p>
              </div>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                Redeem Credits
              </button>
            </div>
          </div>

          {/* Refunds History */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Recent Refunds
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {/* Refund Item */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">Order #12345</p>
                    <p className="text-sm text-gray-500">
                      Refund processed on Jan 10, 2024
                    </p>
                  </div>
                  <div className="text-right">
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
  );
};

export default CreditsRefunds;

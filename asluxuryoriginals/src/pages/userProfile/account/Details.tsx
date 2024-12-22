// DetailsSecurity.tsx

import { Link } from "react-router-dom";
import {
//   UserIcon,
  KeyIcon,
  ShieldCheckIcon,
//   DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const DetailsSecurity = () => {
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

      {/* Right Side Content */}
      <div className="w-3/4 p-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Account Details & Security
          </h2>

          {/* Personal Details Section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Personal Details
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    defaultValue="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Security Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <KeyIcon className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Password</p>
                    <p className="text-sm text-gray-500">
                      Last changed 3 months ago
                    </p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Change
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <ShieldCheckIcon className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Two-Factor Authentication
                    </p>
                    <p className="text-sm text-gray-500">Not enabled</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Enable
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSecurity;

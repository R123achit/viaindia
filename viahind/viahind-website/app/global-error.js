'use client';

import { FaExclamationTriangle } from 'react-icons/fa';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaExclamationTriangle className="text-5xl text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Application Error
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Something went wrong. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => reset()}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 leading-none">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
          >
            <FaHome />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-500 transition-all inline-flex items-center justify-center gap-2"
          >
            <FaSearch />
            Contact Us
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-blue-600 hover:text-blue-700 font-semibold">
              About Us
            </Link>
            <Link href="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
              Services
            </Link>
            <Link href="/industries" className="text-blue-600 hover:text-blue-700 font-semibold">
              Industries
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

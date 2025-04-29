import Link from "next/link"
import { Search } from "@/components/search"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-red-500"
            >
              <path d="M12 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9z" />
              <path d="M12 12v.01" />
              <path d="M8 12v.01" />
              <path d="M16 12v.01" />
            </svg>
            <h1 className="text-2xl font-bold ml-2 text-red-500">AirbnbClone</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-red-500">
              Home
            </Link>
            <Link href="/listings" className="text-gray-700 hover:text-red-500">
              Listings
            </Link>
          </nav>
        </header>

        <div className="mt-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Find your next stay</h2>
          <Search />
        </div>

        <div className="text-center mt-16 mb-8">
          <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h4 className="text-xl font-medium mb-2">Search</h4>
              <p className="text-gray-600">Find the perfect place by location, dates, and number of guests</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h4 className="text-xl font-medium mb-2">Browse</h4>
              <p className="text-gray-600">Explore detailed listings with photos, amenities, and reviews</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h4 className="text-xl font-medium mb-2">Book</h4>
              <p className="text-gray-600">Select your favorite and book your perfect getaway</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ListingCard } from "@/components/listing-card"
import { Filters } from "@/components/filters"
import { Skeleton } from "@/components/ui/skeleton"

interface Listing {
  id: number
  title: string
  location: string
  price_per_night: number
  currency: string
  ratings: number
  reviews: number
  image_urls: string[]
}

export default function ListingsPage() {
  const searchParams = useSearchParams()
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from your Django backend
    // const location = searchParams.get('location');
    // const checkIn = searchParams.get('checkIn');
    // const checkOut = searchParams.get('checkOut');
    // const guests = searchParams.get('guests');

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock data for demonstration
      setListings([
        {
          id: 1,
          title: "Cozy Apartment in NYC",
          location: "New York, USA",
          price_per_night: 120,
          currency: "USD",
          ratings: 4.8,
          reviews: 150,
          image_urls: ["/placeholder.svg?height=300&width=500"],
        },
        {
          id: 2,
          title: "Luxury Condo with Ocean View",
          location: "Miami, USA",
          price_per_night: 250,
          currency: "USD",
          ratings: 4.9,
          reviews: 87,
          image_urls: ["/placeholder.svg?height=300&width=500"],
        },
        {
          id: 3,
          title: "Downtown Loft with City Views",
          location: "Chicago, USA",
          price_per_night: 180,
          currency: "USD",
          ratings: 4.7,
          reviews: 120,
          image_urls: ["/placeholder.svg?height=300&width=500"],
        },
        {
          id: 4,
          title: "Charming Studio in Historic District",
          location: "Boston, USA",
          price_per_night: 140,
          currency: "USD",
          ratings: 4.6,
          reviews: 95,
          image_urls: ["/placeholder.svg?height=300&width=500"],
        },
        {
          id: 5,
          title: "Modern Apartment near Tech Hub",
          location: "San Francisco, USA",
          price_per_night: 220,
          currency: "USD",
          ratings: 4.9,
          reviews: 210,
          image_urls: ["/placeholder.svg?height=300&width=500"],
        },
        {
          id: 6,
          title: "Cozy Cabin in the Mountains",
          location: "Denver, USA",
          price_per_night: 160,
          currency: "USD",
          ratings: 4.8,
          reviews: 75,
          image_urls: ["/placeholder.svg?height=300&width=500"],
        },
      ])
      setLoading(false)
    }, 1500)
  }, [searchParams])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Search Results</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <Filters />
        </div>

        <div className="w-full md:w-3/4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <Link href={`/listings/${listing.id}`} key={listing.id}>
                  <ListingCard listing={listing} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

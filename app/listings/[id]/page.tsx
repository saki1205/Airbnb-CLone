"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, Users, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface Listing {
  id: number
  title: string
  location: string
  address: string
  price_per_night: number
  currency: string
  total_price: number
  image_urls: string[]
  ratings: number
  reviews: number
  description: string
  amenities: string[]
  host: {
    name: string
    image: string
    joined: string
    is_superhost: boolean
  }
  property_type: string
}

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const [listing, setListing] = useState<Listing | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from your Django backend
    // const fetchListing = async () => {
    //   const response = await fetch(`/api/listings/${params.id}`);
    //   const data = await response.json();
    //   setListing(data);
    //   setLoading(false);
    // };
    // fetchListing();

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock data for demonstration
      setListing({
        id: Number.parseInt(params.id),
        title: "Cozy Apartment in NYC",
        location: "New York, USA",
        address: "123 Broadway, New York, NY 10001",
        price_per_night: 120,
        currency: "USD",
        total_price: 560,
        image_urls: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=300&width=400",
          "/placeholder.svg?height=300&width=400",
          "/placeholder.svg?height=300&width=400",
          "/placeholder.svg?height=300&width=400",
        ],
        ratings: 4.8,
        reviews: 150,
        description:
          "This beautiful apartment in the heart of New York City offers stunning views and easy access to all major attractions. The space is perfect for couples or solo travelers looking to explore the city. With a fully equipped kitchen, comfortable bed, and modern amenities, you'll feel right at home during your stay.",
        amenities: [
          "WiFi",
          "Kitchen",
          "Air Conditioning",
          "Washer",
          "Dryer",
          "TV",
          "Heating",
          "Workspace",
          "Iron",
          "Hair dryer",
        ],
        host: {
          name: "John Doe",
          image: "/placeholder.svg?height=100&width=100",
          joined: "January 2018",
          is_superhost: true,
        },
        property_type: "Entire apartment",
      })
      setLoading(false)
    }, 1500)
  }, [params.id])

  const formatCurrency = (amount: number, currencyCode: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(amount)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Skeleton className="h-96 w-full rounded-lg" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-44 w-full rounded-lg" />
            <Skeleton className="h-44 w-full rounded-lg" />
            <Skeleton className="h-44 w-full rounded-lg" />
            <Skeleton className="h-44 w-full rounded-lg" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <Skeleton className="h-6 w-1/3 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            <Skeleton className="h-6 w-1/4 mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
              {[...Array(9)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>
      </div>
    )
  }

  if (!listing) {
    return <div className="container mx-auto px-4 py-8">Listing not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">{listing.title}</h1>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="ml-1 mr-2">{listing.ratings}</span>
          <span className="text-gray-500">·</span>
          <span className="ml-2 text-gray-700">{listing.reviews} reviews</span>
          <span className="text-gray-500 mx-2">·</span>
          <span className="text-gray-700">{listing.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image src={listing.image_urls[0] || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {listing.image_urls.slice(1, 5).map((url, index) => (
            <div key={index} className="relative h-44 rounded-lg overflow-hidden">
              <Image
                src={url || "/placeholder.svg"}
                alt={`${listing.title} - image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold">
                {listing.property_type} hosted by {listing.host.name}
              </h2>
              <p className="text-gray-600">Address: {listing.address}</p>
            </div>
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image
                src={listing.host.image || "/placeholder.svg"}
                alt={listing.host.name}
                fill
                className="object-cover"
              />
              {listing.host.is_superhost && (
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
                  <Award className="h-4 w-4 text-red-500" />
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-b py-6 mb-6">
            <h3 className="font-semibold mb-4">About this place</h3>
            <p className="text-gray-700">{listing.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-4">What this place offers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
              {listing.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                    <span className="text-gray-600 text-sm">{amenity.charAt(0)}</span>
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="border rounded-xl p-6 shadow-md sticky top-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="font-semibold text-xl">
                  {formatCurrency(listing.price_per_night, listing.currency)}
                </span>
                <span className="text-gray-600"> night</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="ml-1">{listing.ratings}</span>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden mb-4">
              <div className="grid grid-cols-2">
                <div className="p-3 border-r border-b">
                  <label className="block text-xs font-semibold">CHECK-IN</label>
                  <div className="flex items-center mt-1">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm">Add date</span>
                  </div>
                </div>
                <div className="p-3 border-b">
                  <label className="block text-xs font-semibold">CHECKOUT</label>
                  <div className="flex items-center mt-1">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm">Add date</span>
                  </div>
                </div>
                <div className="p-3 col-span-2">
                  <label className="block text-xs font-semibold">GUESTS</label>
                  <div className="flex items-center mt-1">
                    <Users className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm">1 guest</span>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-red-500 hover:bg-red-600 text-white mb-4">Reserve</Button>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="underline">
                  {formatCurrency(listing.price_per_night, listing.currency)} x 4 nights
                </span>
                <span>{formatCurrency(listing.price_per_night * 4, listing.currency)}</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Cleaning fee</span>
                <span>{formatCurrency(50, listing.currency)}</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Service fee</span>
                <span>{formatCurrency(30, listing.currency)}</span>
              </div>
              <div className="flex justify-between font-semibold pt-3 border-t">
                <span>Total before taxes</span>
                <span>{formatCurrency(listing.total_price, listing.currency)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

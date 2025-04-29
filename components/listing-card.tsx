import Image from "next/image"
import { Star } from "lucide-react"

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

interface ListingCardProps {
  listing: Listing
}

export function ListingCard({ listing }: ListingCardProps) {
  const { title, location, price_per_night, currency, ratings, reviews, image_urls } = listing

  const formatCurrency = (amount: number, currencyCode: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(amount)
  }

  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image_urls[0] || "/placeholder.svg?height=300&width=500"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm">{ratings}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-1">{location}</p>
        <p className="text-gray-500 text-sm mt-1">{reviews} reviews</p>
        <p className="font-semibold mt-2">
          {formatCurrency(price_per_night, currency)} <span className="font-normal">night</span>
        </p>
      </div>
    </div>
  )
}

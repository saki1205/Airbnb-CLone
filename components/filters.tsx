"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function Filters() {
  const [priceRange, setPriceRange] = useState([50, 500])
  const [minRating, setMinRating] = useState(4)

  const amenities = [
    { id: "wifi", label: "WiFi" },
    { id: "kitchen", label: "Kitchen" },
    { id: "ac", label: "Air Conditioning" },
    { id: "washer", label: "Washer" },
    { id: "pool", label: "Pool" },
    { id: "parking", label: "Free Parking" },
  ]

  const propertyTypes = [
    { id: "entire", label: "Entire place" },
    { id: "private", label: "Private room" },
    { id: "shared", label: "Shared room" },
    { id: "hotel", label: "Hotel room" },
  ]

  return (
    <div className="bg-white p-4 rounded-lg border">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Price range</h3>
        <div className="px-2">
          <Slider
            defaultValue={priceRange}
            min={0}
            max={1000}
            step={10}
            onValueChange={(value) => setPriceRange(value as number[])}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}+</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Minimum rating</h3>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Button
              key={rating}
              variant={minRating === rating ? "default" : "outline"}
              size="sm"
              onClick={() => setMinRating(rating)}
              className={minRating === rating ? "bg-red-500 hover:bg-red-600" : ""}
            >
              {rating}+
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Property type</h3>
        <div className="space-y-2">
          {propertyTypes.map((type) => (
            <div key={type.id} className="flex items-center">
              <Checkbox id={type.id} />
              <label htmlFor={type.id} className="ml-2 text-sm">
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Amenities</h3>
        <div className="space-y-2">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="flex items-center">
              <Checkbox id={amenity.id} />
              <label htmlFor={amenity.id} className="ml-2 text-sm">
                {amenity.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Apply filters</Button>
    </div>
  )
}

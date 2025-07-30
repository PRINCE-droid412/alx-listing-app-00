import { useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("what");

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title & Location */}
      <h1 className="text-3xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-3 text-gray-600 mt-2">
        <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-80 object-cover rounded-lg"
        />
        {/* Replace with multiple images if available */}
        <img src={property.image} className="w-full h-40 object-cover rounded-lg" />
        <img src={property.image} className="w-full h-40 object-cover rounded-lg" />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">

          {/* Tabs */}
          <div>
            <div className="flex space-x-4 border-b">
              <button
                className={`py-2 ${activeTab === "what" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
                onClick={() => setActiveTab("what")}
              >
                What we offer
              </button>
              <button
                className={`py-2 ${activeTab === "reviews" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
              <button
                className={`py-2 ${activeTab === "host" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
                onClick={() => setActiveTab("host")}
              >
                About host
              </button>
            </div>

            <div className="mt-4">
              {activeTab === "what" && <p>{property.description}</p>}
              {activeTab === "reviews" && <ReviewSection reviews={property.reviews} />}
              {activeTab === "host" && (
                <div>
                  <p className="font-semibold">Hosted by {property.hostName || "Unknown"}</p>
                  <p className="text-sm text-gray-600 mt-1">Contact: {property.hostEmail || "N/A"}</p>
                </div>
              )}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Amenities & Services</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {property.category.map((item, idx) => (
                <li key={idx} className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Booking */}
        <div className="md:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

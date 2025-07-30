import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Handle case where the router is not ready
  if (!id) return <p>Loading...</p>;

  // Make sure to match id properly (convert to string)
  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === id.toString().toLowerCase()
  );

  if (!property) return <p>Property not found</p>;

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      <PropertyDetail property={property} />
    </div>
  );
}

import { business } from "@/config/business";

/** Abre Google Maps con indicaciones hacia el local. */
export function getDirectionsUrl(): string {
  const { address, city, mapsQuery, isPlaceholder } = business.location;
  const destination = isPlaceholder ? mapsQuery : `${address}, ${city}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

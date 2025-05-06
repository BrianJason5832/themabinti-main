
import { useState } from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const locations = [
  { id: 'all', name: 'All Locations' },
  { id: 'nairobi', name: 'Nairobi' },
  { id: 'nakuru', name: 'Nakuru' },
  { id: 'kiambu', name: 'Kiambu' },
  { id: 'kisumu', name: 'Kisumu' },
  { id: 'thika', name: 'Thika' }
];

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    console.log('Selected location:', value);
    // Implement filtering by location
  };

  return (
    <div className="w-full max-w-[180px]">
      <Select value={selectedLocation} onValueChange={handleLocationChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          {locations.map((location) => (
            <SelectItem key={location.id} value={location.id}>
              {location.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationSelector;

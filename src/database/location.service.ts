import locations from '../data/data.json';

export interface Location {
	id: string;
	title: string;
	cover: string;
	pictures: string[];
	description: string;
	host: {
		name: string;
		picture: string;
	};
	rating: string;
	location: string;
	equipments: string[];
	tags: string[];
}

export class LocationService {
    
    static getLocations(): Location[] {
        return locations;
    }

    static getLocation(id: string): Location | null {
        return locations.find(location => location.id === id) ?? null;
    }
}
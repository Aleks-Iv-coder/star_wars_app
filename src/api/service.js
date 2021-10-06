export default class SwapiService {
    
    _API = {
        CREATURES: 'https://swapi.dev/api/people',
        PLANETS: `https://swapi.dev/api/planets`,
    };

    async getResource(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };

    async getCreaturesList(url = false) {
        if(!url) {
            const res = await this.getResource(this._API.CREATURES);
            return this.transformCreaturesData(res);
        } else {
            const res = await this.getResource(url);
            return this.transformCreaturesData(res);
        };
    };

    async getPlanetsList(url = false) {
        if(!url) {
            const res = await this.getResource(this._API.PLANETS);
            return this.transformPlanetsData(res);
        } else {
            const res = await this.getResource(url);
            return this.transformPlanetsData(res);
        };
    };

    transformCreaturesData (data) {
        const totalItem = data.count;
        const next = data.next;
        const prev = data.previous;
        return data.results.map((item) => {
            return {
                next: next,
                prev: prev,
                totalItem: totalItem,
                name: item.name,
                height: item.height,
                mass: item.mass,
                hair_color: item.hair_color,
                skin_color: item.skin_color,
                eye_color: item.eye_color,
                birth_year: item.birth_year,
                gender: item.gender,
                homeworld: item.homeworld,
                creatures_url: item.url,
            };
        });
    };

    transformPlanetsData (data) {
        const totalItem = data.count;
        const next = data.next;
        const prev = data.previous;
        return data.results.map((item) => {
            return {
                next: next,
                prev: prev,
                totalItem: totalItem,
                name: item.name,
                rotation_period: item.rotation_period,
                orbital_period: item.orbital_period,
                diameter: item.diameter,
                climate: item.climate,
                gravity: item.gravity,
                terrain: item.terrain,
                surface_water: item.surface_water,
                population: item.population,
                planet_url: item.url,
            };
        });
    };
};

export const service = new SwapiService();

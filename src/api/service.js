export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`, {
            method: 'GET',
        });

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    async getPeopleList() {
        const res = await this.getResource(`/people`);
        return res;
    }

    async getPlanetsList() {
        const res = await this.getResource(`/planets`);
        return res;
    }

    async getCustomeData(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json(); 

        // return res;
        // {
        //     id: res.id,
        //     login: res.login,
        //     userName: res.name,
        //     avatar_url: res.avatar_url,
        //     email: res.email,
        //     location: res.location,
        //     join_date: res.created_at.substring(0,10),
        //     followers: res.followers,
        //     following: res.following,
        //     bio: res.bio,
        // };
    }
    
    async searchRepos(login, search) {
        const res = await this.getResource(`/search/repositories?q=${search} user:${login}`);
        return res.items.map((repo) => ({
            id: repo.id,
            name: repo.name,
            forks: repo.forks,
            stars: repo.stargazers_count,
            url: repo.html_url,
        }));
    };

}

export const service = new SwapiService();

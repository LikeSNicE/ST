
export default class GotService {
  constructor() {
    this._apiBase = 'http://localhost:3000';
  }

   getResource = async (url) => {
     const res = await fetch(`${this._apiBase}${url}`)
     if (!res.ok) {
       throw new Error(`Could not fetch ${url} status: ${res.status} `)
     }
     return res.json();
   }

  getAllCharacters = async () => {
    const res = await this.getResource(`/characters/`);
    res.sort(function(a,b){
      return a.name.localeCompare(b.name);
    })
    return res;
  }
  
  getCharacter = async (id) => {
    const character = await this.getResource(`/characters/${id}`)
    return this._transformCharacter(character);
  }

  getSeason = async (id) => {
    const season = await this.getResource(`/episodes/${id}`);
    return this._transformEpisodes(season);
  }


  getAllSeasons = async () => {
    const res = await this.getResource(`/seasons/`);
    return res.map(this._transformEpisodes);
  }

  //  getSeason = async (id) => {
  //    const season = await this.getResource(`/episodes/${id}`);
  //    return this._transformEpisodes(season);
  //  }


  isSet = (data) => {
    return data ? data : 'No data :(';
  }

  _transformCharacter = (char) => {
    return {
      id: this.isSet(char.id),
      name: this.isSet(char.name),
      photo: this.isSet(char.photo),
      born: this.isSet(char.born),
      seasons: this.isSet(char.seasons),
      act: this.isSet(char.act),
      status: this.isSet(char.status),
      gender: this.isSet(char.gender)
    };
  }

  _transformEpisodes = (episodes) => {
    return {
      id: this.isSet(episodes.id),
      name: this.isSet(episodes.name),
      releaseDate: this.isSet(episodes.releaseDate),
      episodes: this.isSet(episodes.episodes),
      ep1: this.isSet(episodes.ep1),
      ep2: this.isSet(episodes.ep2),
      ep3: this.isSet(episodes.ep3),
      ep4: this.isSet(episodes.ep4),
      ep5: this.isSet(episodes.ep5),
      ep6: this.isSet(episodes.ep6),
      ep7: this.isSet(episodes.ep7),
      ep8: this.isSet(episodes.ep8),
      ep9: this.isSet(episodes.ep9)
    }
  }

}
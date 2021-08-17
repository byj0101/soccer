// global import
import axios from 'axios';

class Config {
  apiKey: string;
  url: string;
  headers: {
    'x-rapidapi-key': string;
    'x-rapidapi-host': string;
  };

  constructor(apiKey: string, endPoint: string) {
    this.apiKey = apiKey;
    this.url = 'https://api-football-beta.p.rapidapi.com/' + endPoint;
    this.headers = {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
    };
  }
}

const apiKey = '';

export const loadData = (): Promise<void> => {
  const config = new Config(apiKey, 'countries');
  return axios(config).then(res => console.log(res));
};

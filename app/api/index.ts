// global import
import axios, {AxiosPromise} from 'axios';

class Config {
  apiKey: string;
  url: string;
  headers: {
    'x-rapidapi-key': string;
    'x-rapidapi-host': string;
  };

  constructor(apiKey: string, endPoint: string, params?: string) {
    const additional = params ? endPoint + params : endPoint;
    const urlPrefix = 'https://api-football-beta.p.rapidapi.com/';
    this.apiKey = apiKey;
    this.url = urlPrefix + additional;
    this.headers = {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
    };
  }
}

const apiKey = '';

export const loadData = (): AxiosPromise<any> => {
  const config = new Config(
    apiKey,
    'fixtures',
    '?league=39&season=2021&from=2021-08-13&to=2021-08-17',
  );
  return axios(config);
};

// import { IErrors } from './errors';

export interface IConfig {
  endpoint: string;
  categories: string[];
  errors: {
    empty: string;
  };
}

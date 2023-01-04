import {Named} from '../ui-kit/model/named.model';

export interface Option extends Named {
  title: string;
  url: string;
  image?: string;
}

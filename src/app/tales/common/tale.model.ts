import {Named} from '../../ui-kit/model/named.model';

export interface Tale extends Named {
  order: number;
  title: string;
  url: string;
  image: string;
}

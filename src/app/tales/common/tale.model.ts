import {Named} from '../../ui-kit/model/named.model';

export interface Tale extends Named {
  id: number;
  title: string;
  url: string;
  image: string;
}

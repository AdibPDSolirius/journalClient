import {Language} from '../../languages/shared/language';

export class Resource {
  id?: number;
  name: String;
  url: String;
  languages: Language[];
}

import {Language} from '../../languages/shared/language';
import {Framework} from '../../frameworks/shared/framework';
import {Database} from '../../databases/shared/database';
import {Library} from '../../libraries/shared/library';

export class Resource {
  id?: number;
  name: String;
  url: String;
  memo: String;
  file: String;
  languages: Language[];
  libraries: Library[];
  databases: Database[];
  frameworks: Framework[];
}

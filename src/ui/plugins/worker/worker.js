import { expose} from 'comlink';
import { db } from '@/services';

const worker = {
  db,
  something: 1234,
}

expose(worker);

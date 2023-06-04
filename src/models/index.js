// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ListaItens } = initSchema(schema);

export {
  ListaItens
};
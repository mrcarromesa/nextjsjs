import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs';
import {faker} from '@faker-js/faker';

interface IUser {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({

    // utilizando o serializers juntamente com o ActiveModelSerializer será possível trabalhar com relacionamentos
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<IUser>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('user', 20);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // adicionar delay para testar chamadas asyncronas

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;
        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);


        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);
        console.log('OI');

        return new Response(
          200,
          {
            'x-total-count': String(total) // Para retornar o total de registros por página o ideal é retornar no header da requisição e não no corpo, pois essa info é um metadado
          },
          {
            users
          }
        )
      });

      this.get('/users/:id');

      this.post('/users');

      // this.namespace = ''; // voltamos ao estado original para não conflitar com o namaspace do next

      // this.passthrough(); // caso as rotas não estejam definidas no mirage ele passa adiante para ser tentadas pela aplicação next
    }
  });

  return server;
}
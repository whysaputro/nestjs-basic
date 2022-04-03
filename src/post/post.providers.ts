import { Connection } from 'mongoose';
import { PostSchema } from 'src/schemas/post.schema';

export const postProviders = [
  {
    provide: 'POST_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('POST', PostSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

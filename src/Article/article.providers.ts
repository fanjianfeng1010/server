import { Connection, connection } from 'mongoose'
import { ArticleSchema } from './schemas/articel.schema'

export const articleProviders = [
  {
    provide: 'ARTICLE_MODEL',
    useFactory: (connect: Connection) => connection.model('Article', ArticleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
]

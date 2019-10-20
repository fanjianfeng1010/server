import { Module } from '@nestjs/common'
import { CatsModule } from './cats/cats.module'
import { ArticleModule } from './cats/article.module'

@Module({
  imports: [CatsModule, ArticleModule],
})
export class AppModule {}

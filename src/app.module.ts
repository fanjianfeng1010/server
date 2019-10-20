import { Module } from '@nestjs/common'
import { CatsModule } from './cats/cats.module'
import { ArticleModule } from './Article/article.module'

@Module({
  imports: [CatsModule, ArticleModule],
})
export class AppModule {}

import { Module } from '@nestjs/common'
import { ArticlesController } from './article.controller'
import { ArticlesService } from './article.service'
import { articleProviders } from './article.providers'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [ArticlesController],
  providers: [ArticlesService, ...articleProviders],
})
export class ArticleModule {}

import { Module } from '@nestjs/common';
import { ArticlesController } from './article/article.controller';
import { ArticlesService } from './article/article.service';
import { ArticleModelProvider } from '../models/article.model';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticleModelProvider],
})
export class ArticleModule {}

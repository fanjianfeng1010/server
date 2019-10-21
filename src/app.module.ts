import { Module } from '@nestjs/common';
import { ArticleModule } from './modules/article.module';
import { CommentModule } from './modules/comment.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [DatabaseModule, ArticleModule, CommentModule],
})
export class AppModule {}

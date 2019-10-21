import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Article, ArticleDocument } from '../../models/article.model';
import { ArticlesService } from './article.service';

@Controller('/api')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Post('/articles')
  async create(@Body() article: Article) {
    await this.articleService.create(article);
  }

  @Get('/article')
  public async getArticle(@Query() query: { id: string }): Promise<
    ArticleResponse
  > {
    let res = await this.articleService.getArticle(query.id);
    let code = 0,
      msg = 'ok',
      data = res;
    return { code, msg, data };
  }

  @Get('/articles')
  async findAll(): Promise<ArticlesResponse> {
    const items = await this.articleService.findAll();
    let code = 0,
      msg = 'ok',
      data = items;
    if (items.length === 0) {
      code = 1;
      (msg = 'error'), (data = []);
    }
    return { code, msg, data };
  }
}

interface ArticlesResponse {
  code: number;
  msg: string;
  data?: ArticleDocument[];
}

interface ArticleResponse {
  code: number;
  msg: string;
  data?: ArticleDocument;
}

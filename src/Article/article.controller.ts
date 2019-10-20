import { Controller, Get, Post, Body } from '@nestjs/common'
import { CreateArticleDto } from './dto/create-article.dto'
import { ArticlesService } from './article.service'
import { Article } from './interface/article.interface'

@Controller('/api')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Post('/articles')
  async create(@Body() createArticleDto: CreateArticleDto) {
    await this.articleService.create(createArticleDto)
  }

  @Get('/articles')
  async findAll(): Promise<ArticlesResponse> {
    const items = await this.articleService.findAll()
    let code = 0,
      msg = 'ok',
      data = items
    return { code, msg, data }
  }
}

interface ArticlesResponse {
  code: number
  msg: string
  data: Article[]
}

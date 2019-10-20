import { Model } from 'mongoose'
import { Injectable, Inject } from '@nestjs/common'
import { Article } from './interface/article.interface'
import { CreateArticleDto } from './dto/create-article.dto'

@Injectable()
export class ArticlesService {
  constructor(@Inject('ARTICLE_MODEL') private readonly articleModel: Model<Article>) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createArticle = new this.articleModel(createArticleDto)
    return await createArticle.save()
  }

  async findAll(): Promise<Article[]> {
    return await this.articleModel.find().exec()
  }
}

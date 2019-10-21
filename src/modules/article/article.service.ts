import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import {
  ArticleModel,
  Article,
  ArticleDocument,
} from '../../models/article.model';
import { InjectModel } from '../../utils/model.util';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(ArticleModel)
    private readonly articleModel: Model<ArticleDocument>,
  ) {}

  async create(articleDocument: Article): Promise<ArticleDocument> {
    const article = await this.articleModel.create(articleDocument);
    return article;
  }

  async getArticle(id): Promise<ArticleDocument> {
    console.log(id);
    console.log(await this.articleModel.findById(id));
    return await this.articleModel.findById(id).exec();
  }

  async findAll(): Promise<ArticleDocument[]> {
    return await this.articleModel.find().exec();
  }
}

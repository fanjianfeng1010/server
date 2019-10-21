import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import {
  CommentDocument,
  Comment,
  CommentModel,
} from '../../models/comment.model';
import { InjectModel } from '../../utils/model.util';
import {
  ArticleSchema,
  ArticleModel,
  ArticleDocument,
} from '../../models/article.model';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(CommentModel)
    private readonly commentModel: Model<CommentDocument>,
    @InjectModel(ArticleModel)
    private readonly articleModel: Model<ArticleDocument>,
  ) {}

  async create(newComment: Comment): Promise<CommentDocument> {
    console.log(newComment.article);
    const article = await this.articleModel.findById(newComment.article);
    console.log(article);
    if (!article) {
      throw new BadRequestException('文章 id 错误');
    }
    const comment: CommentDocument = await this.commentModel.create(newComment);
    await this.articleModel.updateOne(
      { _id: article._id },
      { $inc: { commentCount: 1 } },
    );
    return comment;
  }

  async getComment(id): Promise<CommentDocument> {
    console.log(id);
    return await this.commentModel.findById(id).exec();
  }
}

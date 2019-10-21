import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Comment, CommentDocument } from '../../models/comment.model';
import { CommentsService } from './comment.service';

@Controller('/api')
export class CommentController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('/comment')
  async create(@Body() comment: Comment) {
    await this.commentsService.create(comment);
  }

  @Get('/comment')
  public async getComment(@Query() query: { id: string }): Promise<
    commentResponse
  > {
    let res = await this.commentsService.getComment(query.id);
    let code = 0,
      msg = 'ok',
      data = res;
    return { code, msg, data };
  }
}

interface commentResponse {
  code: number;
  msg: string;
  data?: CommentDocument;
}

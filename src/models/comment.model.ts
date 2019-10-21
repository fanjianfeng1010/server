import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { getProviderByModel } from '../utils/model.util';

export interface Comment {
  readonly _id: string;
  readonly nickName?: string;
  readonly content: string;
  readonly createdAt?: string | Date;
  readonly article?: string;
}

export interface CommentDocument extends Comment, Document {
  readonly _id: string;
}

export const CommentSchema = new mongoose.Schema(
  {
    nickName: {
      type: String,
      min: [1],
      max: 150,
      required: true,
    },
    content: {
      type: String,
      min: [2],
      max: 150,
      required: true,
    },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'article',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const CommentModel = mongoose.model('comment', CommentSchema, 'comment');
export const CommentModelProvider = getProviderByModel(CommentModel);

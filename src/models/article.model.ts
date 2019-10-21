import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { getProviderByModel } from '../utils/model.util';

export interface Article {
  readonly _id?: string | mongoose.Types.ObjectId;
  readonly title: string;
  readonly content: string;
  readonly summary: string;
  readonly category: string;
  readonly commentCount?: number;
  readonly viewsCount?: number;
  readonly createdAt?: string | Date;
  readonly tags?: string[];
}

export interface ArticleDocument extends Article, Document {
  readonly _id: string;
}

export const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      min: [1],
      max: 150,
      required: true,
    },
    content: {
      type: String,
      min: [1],
      max: 8000,
      required: true,
    },
    summary: {
      type: String,
      min: [1],
      max: 2000,
      required: true,
    },
    category: {
      type: String,
      required: true,
      default: '默认种类',
    },
    commentCount: {
      type: Number,
      max: 100000,
      default: 0,
    },
    viewsCount: {
      type: Number,
      max: 100000,
      default: 0,
    },
    //标签
    tags: { type: [String], index: true },
  },
  {
    timestamps: true,
  },
);

export const ArticleModel = mongoose.model('article', ArticleSchema, 'article');
export const ArticleModelProvider = getProviderByModel(ArticleModel);

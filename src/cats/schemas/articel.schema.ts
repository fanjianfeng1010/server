import * as mongoose from 'mongoose'

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
)

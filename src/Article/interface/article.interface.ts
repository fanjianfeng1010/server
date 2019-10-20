import { Document } from 'mongoose'

export interface Article extends Document {
  readonly title: string
  readonly content: string
  readonly summary: string
  readonly category: string
  readonly commentCount?: number
  readonly viewsCount?: number
  readonly createdAt?: string | Date
  readonly tags?: string[]
}

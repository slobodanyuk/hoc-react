export type ArticleItem = Readonly<{
  type: 'article'
  title: string
  views: number
}>

export type VideoItem = Readonly<{
  type: 'video'
  url: string
  views: number
}>

export type HighlightItem = ArticleItem | VideoItem

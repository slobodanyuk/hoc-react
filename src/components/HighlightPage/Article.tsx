import type { ArticleItem } from './HighlightItem'

export default function Article({ title, views }: Omit<ArticleItem, 'type'>) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  )
}

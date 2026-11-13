import Article from './Article'
import type { HighlightItem } from './HighlightItem'
import Video from './Video'
import withHighlight from './withHighlight'

const HighlightedArticle = withHighlight(Article)
const HighlightedVideo = withHighlight(Video)

type ListProps = Readonly<{
  list: readonly HighlightItem[]
}>

export default function List({ list }: ListProps) {
  return list.map((item, index) => {
    const key = `${item.type}-${index}`

    if (item.type === 'video') {
      return <HighlightedVideo key={key} url={item.url} views={item.views} />
    }

    return <HighlightedArticle key={key} title={item.title} views={item.views} />
  })
}

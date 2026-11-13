import type { VideoItem } from './HighlightItem'

export default function Video({ url, views }: Omit<VideoItem, 'type'>) {
  return (
    <div className="item item-video">
      <iframe src={url} title="Видео" allow="autoplay; encrypted-media" allowFullScreen />
      <p className="views">Просмотров: {views}</p>
    </div>
  )
}

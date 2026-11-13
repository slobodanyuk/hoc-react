import type { VideoItem } from './VideoData'
import Video from './Video'

type VideoListProps = Readonly<{
  list: readonly VideoItem[]
}>

export default function VideoList({ list }: VideoListProps) {
  return (
    <div className="video-wrapper">
      {list.map(item => (
        <Video url={item.url} key={item.date} date={item.date} />
      ))}
    </div>
  )
}

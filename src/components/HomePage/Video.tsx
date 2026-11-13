import DateTimePretty from './DateTimePretty'
import type { VideoItem } from './VideoData'

export default function Video({ url, date }: VideoItem) {
  return (
    <div className="video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
      <DateTimePretty date={date} />
    </div>
  )
}

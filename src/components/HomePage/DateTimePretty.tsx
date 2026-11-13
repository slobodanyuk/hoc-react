import type { ComponentType } from 'react'
import DateTime, { type DateTimeProps } from './DateTime'
import moment from 'moment/moment.js'
import 'moment/locale/ru'

const withPrettyDate = (Component: ComponentType<DateTimeProps>) => {
  const WithPrettyDate = ({ date }: DateTimeProps) => {
    const relativeTime = moment(date, 'YYYY-MM-DD HH:mm:ss', true).locale('ru').fromNow()
    return <Component date={relativeTime} />
  }
  const componentName = Component.displayName || Component.name || 'Component'
  WithPrettyDate.displayName = `Pretty(${componentName})`

  return WithPrettyDate
}

const DateTimePretty = withPrettyDate(DateTime)

export default DateTimePretty

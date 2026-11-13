import type { ComponentType } from 'react'
import New from './New'
import Popular from './Popular'

type WithViews = Readonly<{ views: number }>

export default function withHighlight<Props extends WithViews>(Component: ComponentType<Props>): ComponentType<Props> {
  const WithHighlight = function (props: Props) {
    const content = <Component {...props} />

    if (props.views >= 1000) {
      return <Popular>{content}</Popular>
    }

    if (props.views <= 100) {
      return <New>{content}</New>
    }

    return content
  }

  const componentName = Component.displayName || Component.name || 'Component'
  WithHighlight.displayName = `Highlight(${componentName})`

  return WithHighlight
}

import type { PropsWithChildren } from 'react'

export default function New({ children }: PropsWithChildren) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  )
}

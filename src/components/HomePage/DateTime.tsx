export type DateTimeProps = Readonly<{
  date: string
}>

export default function DateTime({ date }: DateTimeProps) {
  return <p className="date">{date}</p>
}

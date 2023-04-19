import { ReactNode } from "react"


type Props = {
  children: ReactNode,
  icon: string,
}
export default function Card({children, icon}:Props) {
  return (
    <div>{children}</div>
  )
}

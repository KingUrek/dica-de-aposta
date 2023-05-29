import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  className?: string,
  id?:string
}

export default function Container({ children, className, id }: Props) {
  return <div id={id} className={`container mx-auto px-18 desktop:px-[125px] ${className}`}>{children}</div>
}

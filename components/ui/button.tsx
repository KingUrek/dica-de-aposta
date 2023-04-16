import Link from "next/link"
import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  link?:string
}

export default function Button({ children, onClick, link }: Props) {
  
  if (link) {
    return <Link href={link}>
      <div className="text-16 bg-primary-invert text-white rounded py-8 text-center font-bold">
        {children}
      </div>

    </Link>
  }
  return (
    <button onClick={onClick} className="text-14 text-white border-2 rounded py-5 px-11">
      {children}
    </button>
  )
}
